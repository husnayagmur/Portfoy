"use client"
import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaSearch, FaTrash, FaReply } from 'react-icons/fa';

export default function ContactManagement() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alya Çay', subject: 'Proje İşbirliği', content: 'Merhaba, projeyle ilgili işbirliği yapmak istiyorum.', isRead: false },
    { id: 2, sender: 'İlara Smith', subject: 'Tasarım Hakkında', content: 'Tasarımlarınızı çok beğendim. Detayları konuşalım.', isRead: true },
    { id: 3, sender: 'Mert Demir', subject: 'Yeni Fikirler', content: 'Yeni projeler hakkında fikirlerim var.', isRead: false },
    { id: 5, sender: 'Semih Kara', subject: 'Tasarım Hakkında', content: 'Web sitesi tasarımında geliştirmeler yapabilir miyiz?', isRead: false },
  ]);
  const [search, setSearch] = useState("");

  const toggleReadStatus = (id) => {
    setMessages(messages.map(msg => msg.id === id ? { ...msg, isRead: !msg.isRead } : msg));
  };
  const deleteMessage = (id) => {
    setMessages(messages.filter(msg => msg.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">İletişim Yönetimi</h1>
      
      <div className="flex items-center bg-gray-800 p-2  border border-dark-gray rounded-lg mb-6">
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
            <div className="flex flex-col w-3/4">
              <span className="text-lg font-semibold">{message.subject}</span>
              <span className="text-sm text-gray-400">{message.sender}</span>
              <p className="text-sm text-gray-300 truncate">{message.content}</p>
            </div>
            <div className="flex items-center space-x-3">
              <button onClick={() => toggleReadStatus(message.id)} className={`p-2 rounded-full transition-all duration-300 ${message.isRead ? 'bg-green-500 hover:bg-green-600' : 'bg-orange-500 hover:bg-orange-600'}`}>
                {message.isRead ? <FaCheckCircle size={18} /> : <FaTimesCircle size={18} />}
              </button>
              <button onClick={() => deleteMessage(message.id)} className="p-2 bg-red-500 hover:bg-red-600 rounded-full"><FaTrash size={18} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
