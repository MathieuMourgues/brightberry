import { db } from "@/firebaseConfig";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

export const dynamic = "force-dynamic";

interface Question {
  id: string;
  text: string;
  audio_path: string;
  answer: string;
}

export default async function ArtworkPage({ 
  params, 
}: { 
  params: Promise<{ id: string }> 
}) {
  const resolvedParams = await params;
  const docRef = doc(db, "arts", resolvedParams.id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists() || !docSnap.data().show) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Œuvre non trouvée</div>;
  }

  const data = docSnap.data();

  // Récupérer la sous-collection "questions"
  let questions: Question[] = [];
  try {
    const questionsCollectionRef = collection(docRef, "questions");
    const questionsSnapshot = await getDocs(questionsCollectionRef);
    questions = questionsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Question[];
  } catch {
    console.log("Pas de questions trouvées pour cette œuvre");
  }

  return (
    <div className="min-h-screen bg-[#f8f4e3] text-gray-800">
      <div className="container mx-auto px-6 py-20">
        {/* Titre de l'œuvre */}
        <h1 className="text-5xl font-bold text-center mb-10 border-4 border-[#d4af37] p-4 rounded-lg" style={{ fontFamily: 'Georgia, serif' }}>
          {data.title}
        </h1>

        {/* Image de l'œuvre */}
        <div className="flex justify-center mb-10">
          <img
            src={data.image_path}
            alt={data.title}
            className="w-full max-w-4xl rounded-lg shadow-lg border border-gray-300"
          />
        </div>

        {/* Description */}
        <div className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10 border-4 border-[#d4af37] p-6 rounded-lg" style={{ fontFamily: 'Georgia, serif' }}>
          <p>{data.description}</p>
        </div>

        {/* Lecteur audio */}
        {data.audio && (
          <div className="flex justify-center mb-10">
            <audio controls className="w-full max-w-md">
              <source src={data.audio} type="audio/mpeg" />
              Votre navigateur ne supporte pas l&apos;élément audio.
            </audio>
          </div>
        )}

        {/* Section Questions et Réponses */}
        {questions.length > 0 && (
          <div className="max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-center mb-8 border-b-4 border-[#d4af37] pb-4" style={{ fontFamily: 'Georgia, serif' }}>Questions et Réponses</h2>
            <div className="space-y-6">
              {questions.map((question) => (
                <div key={question.id} className="bg-white rounded-lg shadow-md border-l-4 border-[#d4af37] p-6">
                  {/* Titre de la question */}
                  <h3 className="text-2xl font-semibold mb-4 text-[#d4af37]" style={{ fontFamily: 'Georgia, serif' }}>
                    {question.text}
                  </h3>

                  {/* Lecteur audio pour la question */}
                  {question.audio_path && (
                    <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-3 font-semibold">Écouter la réponse :</p>
                      <audio controls className="w-full">
                        <source src={question.audio_path} type="audio/mpeg" />
                        Votre navigateur ne supporte pas l&apos;élément audio.
                      </audio>
                    </div>
                  )}

                  {/* Réponse textuelle */}
                  {question.answer && (
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-sm text-gray-600 mb-2 font-semibold">Transcription :</p>
                      <p className="text-gray-800 leading-relaxed">{question.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Détails supplémentaires */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto border-4 border-[#d4af37]" style={{ fontFamily: 'Georgia, serif' }}>
          <h2 className="text-2xl font-semibold mb-4 text-center">Détails de l&apos;œuvre</h2>
          <ul className="space-y-2">
            {data.year && (
              <li>
                <strong>Année de création :</strong> {data.year}
              </li>
            )}
            {data.style && (
              <li>
                <strong>Style :</strong> {data.style}
              </li>
            )}
            {data.artist && (
              <li>
                <strong>Artiste :</strong> {data.author}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}