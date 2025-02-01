"use client";
import React, { useState } from 'react';
import { FaPen, FaSave, FaCheckCircle, FaPlus, FaTrash } from 'react-icons/fa';
import { skills as initialSkills } from '@/app/user/about/page';

const AboutManagement = () => {
  const [aboutText, setAboutText] = useState(`
    Yazılım geliştirme alanında kendimi geliştirmeye hevesli, yenilikçi çözümler üretmeye odaklanan bir yazılımcıyım. 
    Necmettin Erbakan Üniversitesi'nde bilgisayar mühendisliği eğitimi alıyor, bilgi ve becerilerimi sürekli olarak genişletmeye özen gösteriyorum. 
    Web geliştirme alanına ilgi duyuyor, modern teknolojileri takip ederek kullanıcı dostu ve sürdürülebilir projeler geliştirmeyi hedefliyorum.
  
    Sürekli öğrenme prensibiyle her gün yeni bilgiler edinerek projelerimde daha etkili çözümler üretiyorum. 
    Hedefim, yalnızca bir yazılımcı olarak değil, aynı zamanda teknolojiyle topluma değer katan bir birey olarak kendimi geliştirmek. 
    Gelecekte daha büyük projelerde yer alarak, bilgi ve deneyimlerimi faydalı ürünlere dönüştürmeyi amaçlıyorum.
  `);
  
  const [editingText, setEditingText] = useState(false);
  const [skills, setSkills] = useState(initialSkills); 
  const [editingSkill, setEditingSkill] = useState(null); 

  const handleAboutTextChange = (e) => setAboutText(e.target.value);
  const toggleEditText = () => setEditingText(!editingText);

  const handleSkillChange = (e, skillId) => {
    const updatedSkills = skills.map(skill =>
      skill.id === skillId ? { ...skill, value: Number(e.target.value) } : skill
    );
    setSkills(updatedSkills);
  };

  const handleSkillNameChange = (e, skillId) => {
    const updatedSkills = skills.map(skill =>
      skill.id === skillId ? { ...skill, name: e.target.value } : skill
    );
    setSkills(updatedSkills);
  };

  const addNewSkill = () => {
    const newSkill = { id: skills.length + 1, name: '', value: 0 };
    setSkills([...skills, newSkill]);
    setEditingSkill(newSkill.id); 
  };

  const deleteSkill = (skillId) => {
    const updatedSkills = skills.filter(skill => skill.id !== skillId);
    setSkills(updatedSkills); 
  };

  return (
    <div className="h-screen bg-gray-900 text-dark-gray p-6 overflow-y-scroll">
      <div className="mb-6">
        <h2 className="text-xl font-medium mb-3 text-white">Hakkımda Yönetimi</h2>
        <div className="relative bg-gray-800  p-5 rounded-lg shadow-lg border border-gray-700">
          {editingText ? (
            <textarea
              value={aboutText}
              onChange={handleAboutTextChange}
              rows="5"
              className="w-full p-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 resize-none"
            />
          ) : (
            <p className="text-gray-300 text-lg italic leading-relaxed">
              {aboutText}
            </p>
          )}
          <button
            onClick={toggleEditText}
            className="absolute top-3 right-3 text-orange-500 hover:text-orange-400 transition-all duration-300"
          >
            {editingText ? <FaSave size={18} /> : <FaPen size={18} />}
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-medium mb-4 text-white">Beceri Yönetimi</h2>
        {skills.map((skill, index) => (
          <div key={index} className="mb-4 border-b border-gray-600 pb-3">
            <div className="flex justify-between items-center space-x-5">
              <input
                type="text"
                value={skill.name}
                onChange={(e) => handleSkillNameChange(e, skill.id)}
                disabled={editingSkill !== skill.id} 
                className="w-3/4 p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <input
                type="number"
                value={skill.value}
                onChange={(e) => handleSkillChange(e, skill.id)}
                disabled={editingSkill !== skill.id} 
                className="w-1/4 p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <div className="flex space-x-2">
                {editingSkill === skill.id ? (
                  <FaCheckCircle
                    onClick={() => setEditingSkill(null)} 
                    className="text-green-600 hover:text-green-500 cursor-pointer"
                    size={18}
                  />
                ) : (
                  <FaPen
                    onClick={() => setEditingSkill(skill.id)} 
                    className="text-gray hover:text-light-green cursor-pointer"
                    size={18}
                  />
                )}
                <FaTrash
                  onClick={() => deleteSkill(skill.id)} 
                  className="text-red-600 hover:text-red-500 cursor-pointer"
                  size={18}
                />
              </div>
            </div>
            <div className="mt-2 h-2 bg-gray-700 rounded-full relative">
              <div
                className="h-full bg-orange-500 rounded-full transition-all duration-300"
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
          </div>
        ))}
        <div className="flex justify-end">
          <button
            onClick={addNewSkill}
            className="mt-4 bg-orange-600 text-white py-1 px-4 rounded-lg hover:bg-orange-700 transition-all duration-300 flex items-center text-sm"
          >
            <FaPlus size={30} className=" p-2" /> Yeni Beceri Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutManagement;
