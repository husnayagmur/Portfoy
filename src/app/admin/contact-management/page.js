"use client"
import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaSearch, FaTrash } from 'react-icons/fa';

export default function ContactManagement() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alya Çay', email: 'alyacay@example.com', subject: 'Proje İşbirliği', content: 'Merhaba, projeyle ilgili işbirliği yapmak istiyorum.', isRead: false },
    { id: 2, sender: 'İlara Smith', email: 'ilara@example.com', subject: 'Tasarım Hakkında', content: 'Tasarımlarınızı çok beğendim. Detayları konuşalım.', isRead: true },
    { id: 3, sender: 'Mert Demir', email: 'mertdemir@example.com', subject: 'Yeni Fikirler', content: 'Yeni projeler hakkında fikirlerim var.', isRead: false },
    { id: 5, sender: 'Semih Kara', email: 'semihkara@example.com', subject: 'Tasarım Hakkında', content: 'Web sitesi tasarımında geliştirmeler yapabilir miyiz?', isRead: false },
  ]);
  const [search, setSearch] = useState("");

  const toggleReadStatus = (id) => {
    setMessages(messages.map(msg => msg.id === id ? { ...msg, isRead: !msg.isRead } : msg));
  };
  const deleteMessage = (id) => {
    setMessages(messages.filter(msg => msg.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white lg:py-6 lg:px-6 px-2  lg:mr-0 mr-2 mt-4 lg:mt-0">
      <div className="flex items-center bg-gray-800 p-2 border border-dark-gray rounded-lg mb-6">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Mesajlarda ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
        />
      </div>
      <div className="space-y-4">
        {messages.filter(msg => msg.sender.toLowerCase().includes(search.toLowerCase())).map((message) => (
          <div
            key={message.id}
            className={`flex items-center justify-between p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out
              ${message.isRead ? 'bg-gray-700 border-l-4 border-gray-600' : 'bg-gray-800 border-l-4 border-orange-500'}`}
          >
            <div className="flex flex-col lg:w-3/4">
              <span className="lg:text-lg text-md font-semibold">{message.subject}</span>
              <span className="lg:text-sm text-xs text-gray-400">{message.sender}</span>
              <span className="lg:text-sm text-xs text-gray-400">{message.email}</span> 
              <p className="lg:text-sm text-xs text-gray-300 truncate">{message.content}</p>
            </div>
            <div className="flex items-center lg:space-x-7 space-x-4">
              <button onClick={() => toggleReadStatus(message.id)} className={`md:p-2 p-1 rounded-full transition-all duration-300 ${message.isRead ? 'bg-green-500 hover:bg-green-600' : 'bg-orange-500 hover:bg-orange-600'}`}>
                {message.isRead ? <FaCheckCircle className='md:text-xl text-md ' /> : <FaTimesCircle className='md:text-xl text-md' />}
              </button>
              <button onClick={() => deleteMessage(message.id)} className="md:p-2 p-1 bg-red-500 hover:bg-red-600 rounded-full"><FaTrash className='md:text-xl text-md' /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
