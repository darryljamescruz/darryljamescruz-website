export default function RoomieSplit() {
  return (
    <div className="w-full min-h-screen bg-[#222831]">
      <div className="text-white px-6 py-12 font-mono max-w-3xl mx-auto space-y-8">
        <a href="/portfolio" className="text-white/70 hover:text-white underline text-sm">&larr; Back to Portfolio</a>

        {/* Title and Status */}
        <div>
          <h1 className="text-3xl font-bold">
            RoomieSplit{" "}
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-800 ring-1 ring-green-600/20 ring-inset ml-2">
              Complete
            </span>
          </h1>
          <p className="text-white/40 text-sm pt-2">Last updated May 21, 2025</p>
        </div>

        {/* Links */}
        <div className="flex gap-4 items-center">
          <a href="https://roomiesplit.netlify.app" target="_blank" rel="noopener noreferrer">
            <img src="../../website.svg" alt="Live Site" className="w-6 h-6 hover:opacity-80" />
          </a>
          <a href="https://github.com/darryljamescruz/roomiesplit" target="_blank" rel="noopener noreferrer">
            <img src="../../github-mark-white.svg" alt="GitHub Repository" className="w-6 h-6 hover:opacity-80" />
          </a>
        </div>

        {/* Personal Statement */}
        <div>
          <h2 className="text-xl font-semibold mb-2">About this project</h2>
          <p>
            RoomieSplit is a web application designed to help roommates track shared expenses and split costs easily. I built this to solve a real-life need for fairness and clarity when managing bills in shared living environments. This project was developed as part of the Dynamic Web Development course at Cal Poly in Winter 2025.
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside text-white/80">
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>bcrypt with salt hashing (for secure password storage)</li>
            <li>Netlify (for simple and low-effort deployment)</li>
          </ul>
        </div>

        {/* Feature Highlight */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Feature Highlight</h2>
          <p>
            RoomieSplit includes dynamic transaction summaries that update in real-time across users. The UI automatically reflects updated balances when roommates log new expenses or payments — no page reload required.
          </p>
        </div>

        {/* To Do */}
        <div>
          <h2 className="text-xl font-semibold mb-2">To Do</h2>
          <ul className="list-disc list-inside text-white/80">
            <li>Fix my current deployment (most likely will use Netlify or Vercel)</li>
            <li>Add section to create a "household"</li>
            <li>Add a homepage</li>
            <li>Add a high level overview dashboard of finances</li>
          </ul>
        </div>
      </div>
    </div>
  );
}