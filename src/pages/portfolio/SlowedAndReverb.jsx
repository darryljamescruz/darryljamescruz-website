export default function SlowedAndReverb() {
  return (
    <div className="w-full min-h-screen bg-[#222831]">
      <div className="text-white px-6 py-12 font-mono max-w-3xl mx-auto space-y-8">
        <a href="/portfolio" className="text-white/70 hover:text-white underline text-sm">&larr; Back to Portfolio</a>

        {/* Title and Status */}
        <div>
          <h1 className="text-3xl font-bold">
            Slowed & Reverb Audio Editor{" "}
            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset ml-2">
              Work In Progress
            </span>
            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-800 ring-1 ring-red-600/20 ring-inset ml-2">
              Not Deployed
            </span>
          </h1>
          <p className="text-white/40 text-sm pt-2">Last updated May 22, 2025</p>
        </div>

        {/* Links */}
        <div className="flex gap-4 items-center">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="../../website.svg" alt="Live Site" className="w-6 h-6 hover:opacity-80" />
          </a>
          <a href="https://github.com/darryljamescruz/slowed-reverb-editor" target="_blank" rel="noopener noreferrer">
            <img src="../../github-mark-white.svg" alt="GitHub Repository" className="w-6 h-6 hover:opacity-80" />
          </a>
        </div>

        {/* Project Overview */}
        <div>
          <h2 className="text-xl font-semibold mb-2">About this project</h2>
          <p>
            An interactive web app designed for easy creation of "slowed and reverb" audio tracks. Users can upload their own music, visually customize slow and reverb effects, preview audio waveforms, and download edited tracks directly.
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside text-white/80">
            <li>React</li>
            <li>JavaScript</li>
            <li>Tailwind CSS</li>
            <li>Web Audio API (frontend audio manipulation)</li>
            <li>Canvas API (waveform visualization)</li>
            <li>Python & FastAPI (backend server)</li>
            <li>FFmpeg (backend audio processing and export)</li>
            <li>REST API (frontend-backend integration)</li>
          </ul>
        </div>

        {/* Feature Highlight */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Feature Highlight</h2>
          <p>
            The app includes a dynamic waveform visualizer that updates in real-time as users adjust the slow and reverb settings, providing immediate visual feedback and an engaging editing experience.
          </p>
        </div>

        {/* Backend Implementation */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Backend Implementation</h2>
          <p>
            I built the backend using Python with FastAPI to create a robust and fast server capable of efficiently managing audio uploads and downloads. For audio processing tasks, I integrated FFmpeg, which allows me to reliably apply slow-motion and reverb effects, as well as handle audio encoding. To ensure smooth communication with the frontend, I designed a straightforward REST API structure that securely manages user requests and provides real-time audio manipulation results.
          </p>
        </div>
      </div>
    </div>
  );
}