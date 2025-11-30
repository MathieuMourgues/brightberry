"use client";

export default function BrightArt() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">BrightArt</h1>
          <button
            className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg text-lg font-medium hover:bg-yellow-300 transition-colors"
            onClick={() => alert('Call to Action Clicked!')}
          >
            Essayez BrightArt
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Rendez l&apos;art accessible à tous</h2>
          <p className="text-lg text-gray-600 mb-8">
            BrightArt offre aux artistes un espace dédié sur le web, accessible via des QR codes,
            pour enrichir l&apos;expérience des visiteurs sans compromettre la beauté de l&apos;exposition.
          </p>
          <button
            className="bg-purple-700 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-purple-600 transition-colors"
            onClick={() => alert('Get Started Clicked!')}
          >
            Commencez dès maintenant
          </button>
        </div>
      </section>

      {/* Sales Arguments Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Pourquoi choisir BrightArt ?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-6xl mb-4">🌐</div>
              <h4 className="text-xl font-semibold mb-4">Espace dédié en ligne</h4>
              <p className="text-gray-600">
                Offrez à vos visiteurs un accès instantané à des informations détaillées sur vos œuvres via des QR codes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-6xl mb-4">📱</div>
              <h4 className="text-xl font-semibold mb-4">Éliminez les impressions</h4>
              <p className="text-gray-600">
                Réduisez les coûts et l&apos;impact environnemental en remplaçant les descriptions imprimées par des contenus numériques.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-6xl mb-4">🎤</div>
              <h4 className="text-xl font-semibold mb-4">Contexte enrichi</h4>
              <p className="text-gray-600">
                Ajoutez des descriptions détaillées et des récits audio pour une expérience immersive et éducative.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-6xl mb-4">🖼️</div>
              <h4 className="text-xl font-semibold mb-4">Préservez l&apos;esthétique</h4>
              <p className="text-gray-600">
                Maintenez la beauté de vos expositions en évitant les textes volumineux à proximité des œuvres.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-6xl mb-4">🔗</div>
              <h4 className="text-xl font-semibold mb-4">Accessibilité universelle</h4>
              <p className="text-gray-600">
                Permettez à tous les visiteurs, y compris les malvoyants, d&apos;accéder aux informations grâce à des descriptions audio.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h4 className="text-xl font-semibold mb-4">Augmentez votre portée</h4>
              <p className="text-gray-600">
                Attirez un public plus large grâce à une solution moderne et adaptée aux besoins des artistes et des visiteurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Prêt à transformer vos expositions ?</h3>
          <p className="text-lg text-blue-100 mb-8">
            Rejoignez BrightArt et découvrez comment enrichir vos expositions tout en préservant leur esthétique.
          </p>
          <button
            className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-lg text-xl font-bold hover:bg-yellow-300 transition-colors"
            onClick={() => alert('Join Now Clicked!')}
          >
            Rejoignez-nous maintenant
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h4 className="text-xl font-bold mb-4">BrightArt</h4>
          <p className="text-gray-400 mb-6">
            Rendre l&apos;art accessible à tous, une œuvre à la fois.
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            © 2025 BrightArt. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}