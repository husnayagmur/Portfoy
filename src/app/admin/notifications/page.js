"use client";
import { useState } from "react";
import { FaBell, FaCheckCircle, FaTrash } from "react-icons/fa";
export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Yeni mesaj aldınız.", time: "2025-02-03T12:00:00", read: false },
    { id: 2, message: "Yorum yapıldı.", time: "2025-02-03T10:00:00", read: true },
    { id: 3, message: "Proje güncellemesi yapıldı.", time: "2025-02-02T18:00:00", read: false },
    { id: 4, message: "Sistem bakımı tamamlandı.", time: "2025-02-01T09:00:00", read: true },
  ]);
  const [filter, setFilter] = useState("all");

  // Bildirimi okundu olarak işaretle
  const markAsRead = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id ? { ...notification, read: true } : notification
    );
    setNotifications(updatedNotifications);
  };

  // Tüm bildirimleri okundu yap
  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({ ...notification, read: true }));
    setNotifications(updatedNotifications);
  };

  // Bildirimi sil
  const deleteNotification = (id) => {
    const updatedNotifications = notifications.filter((notification) => notification.id !== id);
    setNotifications(updatedNotifications);
  };

  // Filtreleme
  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "unread") return !notification.read;
    if (filter === "read") return notification.read;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6">
      {/* Başlık ve "Tümünü Okundu Yap" Butonu */}
      <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
        <div className="flex items-center gap-2">
          <FaBell className="text-yellow-400 text-2xl" />
          <h1 className="text-xl md:text-2xl font-semibold">Bildirimler</h1>
        </div>
        <button
          onClick={markAllAsRead}
          className="bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600 transition"
        >
          Tümünü Okundu Yap
        </button>
      </div>

      {/* Filtreleme Alanı */}
      <div className="flex gap-3 mb-4">
        <button
          className={`px-4 py-2 rounded-md ${filter === "all" ? "bg-blue-500" : "bg-gray-700"} text-white hover:bg-blue-600 transition`}
          onClick={() => setFilter("all")}
        >
          Tümü
        </button>
        <button
          className={`px-4 py-2 rounded-md ${filter === "unread" ? "bg-medium-gray" : "bg-gray-700"} text-white hover:bg-medium-gray transition`}
          onClick={() => setFilter("unread")}
        >
          Okunmamış
        </button>
        <button
          className={`px-4 py-2 rounded-md ${filter === "read" ? "bg-medium-gray" : "bg-gray-700"} text-white hover:bg-medium-gray transition`}
          onClick={() => setFilter("read")}
        >
          Okunan
        </button>
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg border shadow-md flex justify-between items-center transition ${
                notification.read ? "border-gray-700 bg-gray-800" : "border-yellow-500 bg-yellow-600"
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  {notification.read ? (
                    <FaCheckCircle className="text-light-green text-lg" />
                  ) : (
                    <FaBell className="text-yellow-400 text-lg" />
                  )}
                  <p className="text-md font-medium">{notification.message}</p>
                </div>
                <p className="text-xs text-gray-400">{new Date(notification.time).toLocaleString()}</p>
              </div>
              <div className="flex gap-3">
                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="text-green-400 hover:text-green-300"
                  >
                    <FaCheckCircle className="text-lg" />
                  </button>
                )}
                <button
                  onClick={() => deleteNotification(notification.id)}
                  className="text-red-400 hover:text-red-300"
                >
                  <FaTrash className="text-lg" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">Gösterilecek bildirim yok.</p>
        )}
      </div>
    </div>
  );
}
