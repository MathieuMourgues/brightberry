"use client";

export default function BrightArtButton() {
  return (
    <button
      className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-400 transition-colors mt-4 ml-4"
      onClick={() => {
        alert('BrightArt Button Clicked!');
      }}
    >
      BrightArt Button
    </button>
  );
}