export default function PersonalWebsite() {
  return (
    <div className="w-full min-h-screen bg-[#222831]">
      <div className="text-white px-6 py-12 font-mono max-w-3xl mx-auto space-y-8">
        <a href="/portfolio" className="text-white/70 hover:text-white underline text-sm">&larr; Back to Portfolio</a>
        {/* Title and Status */}
        <div>
          <h1 className="text-3xl font-bold">
            Personal Website{" "}
            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset ml-2">
              Work In Progress
            </span>
          </h1>
          <p className="text-white/40 text-sm pt-2">Last updated May 21, 2025</p>
        </div>

        {/* Links */}
        <div className="flex gap-4 items-center">
          <a href="https://darryljamescruz.netlify.app" target="_blank" rel="noopener noreferrer">
            <img src="../../website.svg" alt="Live Site" className="w-6 h-6 hover:opacity-80" />
          </a>
          <a href="https://github.com/darryljamescruz/darryljamescruz-website" target="_blank" rel="noopener noreferrer">
            <img src="../../github-mark-white.svg" alt="GitHub Repository" className="w-6 h-6 hover:opacity-80" />
          </a>
        </div>

        {/* Personal Statement */}
        <div>
          <h2 className="text-xl font-semibold mb-2">About this project</h2>
          <p>
            I created this website to serve as a central hub for learning more about me and the work I’ve done so far. It acts as a digital portfolio where I can share personal projects, my development journey, and the tools I’m exploring.
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside text-white/80">
            <li>React</li>
            <li>JavaScript</li>
            <li>Tailwind CSS</li>
            <li>Netlify (for simple and low-effort deployment)</li>
          </ul>
        </div>

        {/* Surprising Feature */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Feature Highlight</h2>
          <p>
            The homepage features a custom Matrix-style rain animation rendered on a canvas background. This was built using a canvas library and layered under the navigation and intro text — creating a dynamic but subtle aesthetic.
          </p>
        </div>
      </div>
    </div>
  );
}
