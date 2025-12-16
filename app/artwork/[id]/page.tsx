import { db } from "@/firebaseConfig";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

export const dynamic = "force-dynamic";

export default async function ArtworkPage({ 
  params, 
}: { 
  params: Promise<{ id: string }> 
}) {
  const resolvedParams = await params;
  const docRef = doc(db, "arts", resolvedParams.id); /* penser a modifier le nom de la collection*/
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Œuvre non trouvée</div>;
  }

  const data = docSnap.data();

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
                <strong>Artiste :</strong> {data.artist}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const querySnapshot = await getDocs(collection(db, "artwork"));
  const paths = querySnapshot.docs.map((doc) => ({
    id: doc.id,
  }));

  return paths;
}