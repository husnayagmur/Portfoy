"use client"
import { useState } from 'react';
import { FaEnvelope, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function ContactManagement() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alya Çay', subject: 'Proje İşbirliği', content: 'Merhaba, projeyle ilgili işbirliği yapmak istiyorum.', isRead: false },
    { id: 2, sender: 'İlara Smith', subject: 'Tasarım Hakkında', content: 'Tasarımlarınızı çok beğendim. Detayları konuşalım.', isRead: true },
    { id: 3, sender: 'Mert Demir', subject: 'Yeni Fikirler', content: 'Yeni projeler hakkında fikirlerim var.', isRead: false },
    { id: 4, sender: 'Erva Ertim', subject: 'Yeni Fikirler', content: 'Yeni projeler hakkında fikirlerim var.', isRead: false },
    { id: 5, sender: 'Semih Kara', subject: 'Tasarım Hakkındar', content: 'Yeni projeler hakkında fikirlerim var.', isRead: false },
  ]);

  const toggleReadStatus = (id) => {
    const updatedMessages = messages.map(message =>
      message.id === id ? { ...message, isRead: !message.isRead } : message
    );
    setMessages(updatedMessages);
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-white">İletişim Yönetimi</h1>
      </div>
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-center justify-between p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out
              ${message.isRead ? 'bg-gradient-to-r from-orange-500 via-gray-700 to-black border-l-4 border-gray-600' : 'bg-gradient-to-r from-white to-black border-l-4 text-black border-orange-500'}`}
          >
            <div className="flex flex-col w-3/4">
              <span className="text-lg font-semibold">{message.subject}</span>
              <span className="text-sm text-gray-400">{message.sender}</span>
              <p className="text-sm text-gray-300 truncate">{message.content}</p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => toggleReadStatus(message.id)}
                className={`text-sm p-2 rounded-full transition-all duration-300
                  ${message.isRead ? 'bg-green-500 hover:bg-green-600' : 'bg-orange-500 hover:bg-orange-600'}`}
              >
                {message.isRead ? <FaCheckCircle size={18} /> : <FaTimesCircle size={18} />}
              </button>
              <FaEnvelope size={20} className="text-gray-500 transition-all duration-300 hover:text-gray-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
