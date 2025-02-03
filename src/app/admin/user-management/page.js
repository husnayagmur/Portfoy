"use client";
import { useState } from "react";
import { FaUserEdit, FaTrash, FaUserPlus, FaSearch } from "react-icons/fa";

export default function UserManagement() {
  const [users, setUsers] = useState([
    { id: 1, name: "Ahmet Yılmaz", email: "ahmet@example.com", role: "Admin" },
    { id: 2, name: "Zeynep Kaya", email: "zeynep@example.com", role: "Editor" },
    { id: 3, name: "Mehmet Demir", email: "mehmet@example.com", role: "User" },
  ]);
  const [search, setSearch] = useState("");
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "User" });

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const addUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
      setNewUser({ name: "", email: "", role: "User" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Kullanıcı Yönetimi</h1>
      </div>

      <div className="mb-4 flex items-center bg-gray-800 p-3 rounded-lg border border-gray-700">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Kullanıcı ara..."
          className="bg-transparent text-white w-full focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Kullanıcı Ekleme Alanı */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h2 className="text-xl mb-3">Yeni Kullanıcı Ekle</h2>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Adı Soyadı"
            className="bg-gray-700 p-2 rounded focus:outline-none text-black w-1/3"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="E-posta"
            className="bg-gray-700 p-2 rounded focus:outline-none text-black w-1/3"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <select
            className="bg-gray-700 p-2 rounded text-black w-1/4"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          >
            <option value="User">User</option>
            <option value="Editor">Editor</option>
            <option value="Admin">Admin</option>
          </select>
          <button
            onClick={addUser}
            className="flex items-center border border-darkdark-gray gap-2 bg-green-500 px-4 py-2 rounded-md hover:bg-green-600"
          >
            <FaUserPlus /> Ekle
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-3 border border-gray-700">Adı</th>
              <th className="p-3 border border-gray-700">E-posta</th>
              <th className="p-3 border border-gray-700">Rol</th>
              <th className="p-3 border border-gray-700">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((user) => (
                <tr key={user.id} className="bg-gray-700 hover:bg-gray-600">
                  <td className="p-3 border border-gray-700">{user.name}</td>
                  <td className="p-3 border border-gray-700">{user.email}</td>
                  <td className="p-3 border border-gray-700">{user.role}</td>
                  <td className="p-5 border border-gray-700 flex gap-3">
                    <button className="text-blue-400 hover:text-blue-300">
                      <FaUserEdit />
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
