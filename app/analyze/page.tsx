'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AnalyzeForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    channelName: '',
    comments: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourrez ajouter la logique pour envoyer les données à votre backend
    console.log('Form data:', formData);
    // Redirection après soumission si nécessaire
    // router.push('/success');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Analysez votre chaîne YouTube
          </h1>
          <p className="text-gray-900 mb-8">
            Remplissez ce formulaire pour obtenir une analyse détaillée des émotions de votre communauté.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="channelName" className="block text-sm font-medium text-gray-900 mb-2">
                Nom de la chaîne YouTube
              </label>
              <input
                type="text"
                id="channelName"
                name="channelName"
                value={formData.channelName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder="Nom de votre chaîne"
              />
            </div>

            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-gray-900 mb-2">
                Commentaires additionnels
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder="Ajoutez des informations supplémentaires..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Lancer l'analyse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
