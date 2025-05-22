export default function CollegePlanner() {
  return (
    <div className="w-full min-h-screen bg-[#222831]">
      <div className="text-white px-6 py-12 font-mono max-w-3xl mx-auto space-y-8">
        <a href="/portfolio" className="text-white/70 hover:text-white underline text-sm">&larr; Back to Portfolio</a>

        {/* Title and Status */}
        <div>
          <h1 className="text-3xl font-bold">
            College Planner{" "}
            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset ml-2">
              Work In Progress
            </span>
          </h1>
          <p className="text-white/40 text-sm pt-2">Last updated May 21, 2025</p>
        </div>

        {/* Links */}
        <div className="flex gap-4 items-center">
          <a href="https://collegeplanner.netlify.app" target="_blank" rel="noopener noreferrer">
            <img src="../../website.svg" alt="Live Site" className="w-6 h-6 hover:opacity-80" />
          </a>
          <a href="https://github.com/darryljamescruz/college-planner" target="_blank" rel="noopener noreferrer">
            <img src="../../github-mark-white.svg" alt="GitHub Repository" className="w-6 h-6 hover:opacity-80" />
          </a>
        </div>

        {/* Personal Statement */}
        <div>
          <h2 className="text-xl font-semibold mb-2">About this project</h2>
          <p>
            The College Planner project was born out of a need to manage and organize my academic life at Cal Poly more effectively. I wanted a tool that could combine daily scheduling, long-term planning, and course tracking into a clean, single-page interface. The planner allows students to view and organize their quarter system courses, break assignments into daily to-dos, and visually track what’s due and what’s done.

            This was a 20-week project spanning Winter and Spring 2025 as part of a software engineering course sequence at Cal Poly. It emphasized project structure, modular development, and best practices for large-scale codebases. Our team of four used Agile and Scrum methodologies, with regular sprint planning, testing, and retrospectives. We designed the app collaboratively using Figma for prototyping and implemented unit tests with Jest and Mockingoose. The project was initially deployed using Microsoft Azure and GitHub Actions, though Azure introduced deployment costs.
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside text-white/80">
            <li>React</li>
            <li>JavaScript</li>
            <li>Tailwind CSS & custom CSS</li>
            <li>Jest & Mockingoose for unit testing</li>
            <li>Microsoft Azure (deployed via GitHub Actions)</li>
          </ul>
        </div>

        {/* Feature Highlight */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Feature Highlight</h2>
          <p>
            One standout feature is the dynamic drag-and-drop calendar that allows users to assign tasks directly to days. The layout intelligently adjusts to screen size, making it easy to use on both desktop and mobile. It supports instant visual feedback and keeps track of progress with smooth animations and accessible contrast.
          </p>
        </div>
      </div>
    </div>
  );
}