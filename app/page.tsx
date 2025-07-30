import Link from 'next/link';
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Ce site est en construction : contactez nous par mail : contact@brightberry.fr
            </h1>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Découvrez le{" "}
              <span className="text-yellow-400">vrai ressenti</span> de votre
              communauté YouTube
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Brightmap transforme les commentaires YouTube en insights
              émotionnels puissants grâce à l&apos;IA et la roue des émotions de
              Plutchik
            </p>
            <div className="mb-8">
              <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center gap-2">
                Analyser ma chaîne gratuitement
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-blue-200">
              ✅ Analyse gratuite • ✅ Résultats en 5 minutes • ✅ Aucune carte
              bancaire requise
            </p>
          </div>
        </div>
      </section>

      {/* Problème Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Les créateurs YouTube font face à des défis majeurs
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-red-500 text-4xl mb-4">😰</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Commentaires toxiques
                </h3>
                <p className="text-gray-900">
                  Les messages haineux et violents touchent profondément les
                  créateurs et nuisent à leur bien-être mental.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-orange-500 text-4xl mb-4">🤔</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Feedback difficile à analyser
                </h3>
                <p className="text-gray-600">
                  Impossible de comprendre rapidement le ressenti réel de sa
                  communauté parmi des milliers de commentaires.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-blue-500 text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Manque d&apos;insights concrets
                </h3>
                <p className="text-gray-600">
                  Difficile de savoir quelles créations résonnent vraiment et
                  comment orienter le contenu futur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Brightmap : La solution basée sur la science des émotions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Notre IA analyse vos commentaires YouTube et les traduit en
                insights émotionnels clairs grâce aux travaux du psychologue
                Robert Plutchik.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl">
                  <div className="w-full h-64 bg-gradient-to-br from-purple-200 to-blue-200 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎯</div>
                      <p className="text-gray-600">
                        Visualisation de la roue des émotions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Analyse IA instantanée
                    </h3>
                    <p className="text-gray-600">
                      Notre IA traite des milliers de commentaires en quelques
                      minutes pour extraire les émotions dominantes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Roue des émotions de Plutchik
                    </h3>
                    <p className="text-gray-600">
                      Visualisation scientifique des 8 émotions primaires et
                      leurs intensités pour une compréhension immédiate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Protection contre la toxicité
                    </h3>
                    <p className="text-gray-600">
                      Les insights incluent les commentaires négatifs sans vous
                      exposer directement aux messages blessants.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-gray-800">
              Transformez votre approche créative
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Plus de contenus engageants
                </h3>
                <p className="text-gray-600">
                  Créez du contenu qui résonne vraiment avec votre audience
                  grâce aux insights émotionnels précis.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  5 minutes vs 5 heures
                </h3>
                <p className="text-gray-600">
                  Comprenez l&apos;impact de vos vidéos instantanément au lieu de
                  passer des heures à lire les commentaires.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Validation de concepts
                </h3>
                <p className="text-gray-600">
                  Testez l&apos;intérêt pour vos idées dès leur publication et
                  ajustez votre stratégie en temps réel.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Bien-être préservé
                </h3>
                <p className="text-gray-600">
                  Restez informé des retours sans subir directement les
                  commentaires toxiques ou démotivants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preuve Sociale Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Les créateurs nous font confiance
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">Marie L.</h4>
                    <p className="text-sm text-gray-600">350K abonnés</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  &quot;Brightmap m&apos;a fait réaliser que mes vidéos de cuisine
                  créaient plus de nostalgie que de faim chez mes viewers. J&apos;ai
                  adapté mon contenu et mes vues ont explosé !&quot;
                </p>
                <div className="mt-4 text-yellow-400">⭐⭐⭐⭐⭐</div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    T
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">Thomas K.</h4>
                    <p className="text-sm text-gray-600">125K abonnés</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  &quot;Enfin un outil qui me protège des commentaires toxiques tout
                  en me donnant de vrais insights ! Ma santé mentale et ma
                  créativité se portent mieux.&quot;
                </p>
                <div className="mt-4 text-yellow-400">⭐⭐⭐⭐⭐</div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">Sofia R.</h4>
                    <p className="text-sm text-gray-600">80K abonnés</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  &quot;La roue des émotions m&apos;a révélé que mes tutorials tech
                  généraient plus de confiance que prévu. J&apos;ai lancé une
                  formation, sold out en 2h !&quot;
                </p>
                <div className="mt-4 text-yellow-400">⭐⭐⭐⭐⭐</div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-800 mb-4">
                Rejoignez plus de 2,500 créateurs qui utilisent Brightmap
              </p>
              <div className="flex justify-center items-center gap-8 text-gray-600">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-sm">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">2.5M+</div>
                  <div className="text-sm">Commentaires analysés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">24h</div>
                  <div className="text-sm">Support réactif</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Questions fréquentes
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Comment Brightmap protège-t-il des commentaires toxiques ?
                </h3>
                <p className="text-gray-600">
                  Notre IA filtre et analyse les commentaires négatifs pour vous
                  fournir des insights sur l&apos;impact émotionnel sans vous exposer
                  directement aux messages blessants. Vous gardez le contrôle
                  sur votre bien-être mental.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  La roue des émotions de Plutchik, c&apos;est fiable ?
                </h3>
                <p className="text-gray-600">
                  Absolument ! Les travaux du professeur Robert Plutchik sont
                  reconnus mondialement en psychologie. Sa roue des 8 émotions
                  primaires est utilisée dans de nombreux domaines pour
                  comprendre les réactions humaines.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Combien de temps prend une analyse ?
                </h3>
                <p className="text-gray-600">
                  Entre 2 et 5 minutes selon le nombre de commentaires. Notre IA
                  traite des milliers de commentaires simultanément pour vous
                  donner des résultats quasi-instantanés.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Ça marche pour toutes les tailles de chaînes ?
                </h3>
                <p className="text-gray-600">
                  Oui ! Que vous ayez 100 ou 100K abonnés, Brightmap s&apos;adapte.
                  Plus vous avez de commentaires, plus l&apos;analyse est précise,
                  mais même avec peu de données, vous obtenez des insights
                  utiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à comprendre votre communauté ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Rejoignez les créateurs qui prennent des décisions éclairées grâce
              aux insights émotionnels de Brightmap.
            </p>

            {/* Bouton pour accéder à la nouvelle page */}
            <Link href="/Privacy">
                <button style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Privacy Policy
                    <Analytics />
                </button>
            </Link>

            {/* Bouton pour accéder à la nouvelle page */}
            <Link href="/DeleteAccount">
                <button style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Delete Account
                </button>
            </Link>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-400">
                    Gratuit
                  </div>
                  <div className="text-sm">Première analyse</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">
                    5 min
                  </div>
                  <div className="text-sm">Pour vos résultats</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">0€</div>
                  <div className="text-sm">Aucun engagement</div>
                </div>
              </div>
            </div>

            <button className="bg-yellow-400 text-blue-900 px-10 py-5 rounded-xl text-2xl font-bold hover:bg-yellow-300 transition-colors inline-flex items-center gap-3 mb-6">
              Analyser ma chaîne maintenant
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>

            <p className="text-sm text-blue-200">
              🔒 Vos données YouTube restent privées • 📊 Résultats
              scientifiquement validés
            </p>

            <div className="mt-8 text-center">
              <p className="text-sm text-blue-300 mb-2">
                ⚡ Offre limitée : Analyse gratuite disponible pour les 100
                premiers créateurs
              </p>
              <div className="bg-yellow-400/20 rounded-lg p-2 inline-block">
                <span className="text-yellow-400 font-semibold">
                  87 places restantes
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Brightberry</h3>
            <p className="text-gray-400 mb-6">
              L&apos;intelligence collective au service des créateurs
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Confidentialité
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Conditions
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              © 2024 Brightberry. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}






