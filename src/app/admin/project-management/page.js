"use client";
import { useState } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { items } from '../../user/projects/page.js';

export default function ProjectManagement() {
  const [projects, setProjects] = useState(items);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const handleModalOpen = (project) => {
    setEditingProject(project);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setEditingProject(null);
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProject = {
      name: formData.get('name'),
      description: formData.get('description'),
      category: formData.get('category'),
      image: formData.get('image'),
    };

    if (editingProject) {
      setProjects(projects.map((project) => (project.slug === editingProject.slug ? { ...editingProject, ...newProject } : project)));
    } else {
      setProjects([...projects, { id: projects.length + 1, ...newProject }]);
    }
    handleModalClose();
  };

  const handleDelete = (slug) => {
    setProjects(projects.filter((project) => project.slug !== slug));
  };

  return (
    <div className="h-full bg-black text-gray-900 p-4 overflow-auto">
      <div className="mb-4 flex justify-end items-end">
        <button onClick={() => handleModalOpen(null)} className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full shadow-lg flex items-center">
          <FaPlus size={20} className="mr-2" /> Yeni Proje Ekle
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.slug} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 h-auto">
            <img src={project.imageSrc} alt={project.alt} className="w-full h-3/5 object-cover rounded-md mb-2" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.slug}</h2>
            <p className="text-sm text-gray-600 mb-2 truncate">{project.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{project.category}</span>
              <div className="flex space-x-4">
                <button onClick={() => handleModalOpen(project)} className="text-blue-500 hover:text-blue-600 transition-all duration-300">
                  <FaEdit size={20} />
                </button>
                <button onClick={() => handleDelete(project.slug)} className="text-red-500 hover:text-red-600 transition-all duration-300">
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 text-gray-900 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold mb-6">{editingProject ? 'Proje Düzenle' : 'Yeni Proje Ekle'}</h2>
            <form onSubmit={handleProjectSubmit}>
              <div className="mb-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Proje Adı</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={editingProject ? editingProject.name : ''}
                  className="w-full mt-2 p-3 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Açıklama</label>
                <textarea
                  id="description"
                  name="description"
                  defaultValue={editingProject ? editingProject.description : ''}
                  className="w-full mt-2 p-3 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Kategori</label>
                <select
                  id="category"
                  name="category"
                  defaultValue={editingProject ? editingProject.category : ''}
                  className="w-full mt-2 p-3 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="Web Geliştirme">Web Geliştirme</option>
                  <option value="Mobil Uygulama">Mobil Uygulama</option>
                  <option value="Yapay Zeka">Yapay Zeka</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">Görsel</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="w-full mt-2 p-3 bg-gray-100 text-gray-900 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-between space-x-4">
                <button type="button" onClick={handleModalClose} className="bg-gray text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-all duration-300">
                  Kapat
                </button>
                <button type="submit" className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-all duration-300">
                  {editingProject ? 'Güncelle' : 'Ekle'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
