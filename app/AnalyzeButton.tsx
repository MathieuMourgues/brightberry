"use client";

export default function AnalyzeButton() {
  return (
    <button
      className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center gap-2"
      onClick={() => (window.location.href = '/analyze')}
    >
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
  );
}