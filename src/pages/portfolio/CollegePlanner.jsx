export default function CollegePlanner() {
  return (
    <div className="w-full min-h-screen bg-[#222831]">
      <div className="text-white px-6 py-12 font-mono max-w-3xl mx-auto space-y-8">
        <a href="/portfolio" className="text-white/70 hover:text-white underline text-sm">&larr; Back to Portfolio</a>

        {/* Title and Status */}
        <div>
          <h1 className="text-3xl font-bold">
            The Hamburger Calendar{" "}
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-800 ring-1 ring-green-600/20 ring-inset ml-2">
              Complete
            </span>
          </h1>
          <p className="text-white/40 text-sm pt-2">Last updated June 6, 2025</p>
        </div>

        {/* Links */}
        <div className="flex gap-4 items-center">
          <a href="https://thehamburgercalendar.netlify.app" target="_blank" rel="noopener noreferrer">
            <img src="../../website.svg" alt="Live Site" className="w-6 h-6 hover:opacity-80" />
          </a>
          <a href="https://github.com/darryljamescruz/The-Hamburger-Calendar" target="_blank" rel="noopener noreferrer">
            <img src="../../github-mark-white.svg" alt="GitHub Repository" className="w-6 h-6 hover:opacity-80" />
          </a>
        </div>

        {/* Personal Statement */}
        <div>
          <h2 className="text-xl font-semibold mb-2">About this project</h2>
          <p>
            The College Planner project—branded as "The Hamburger Calendar"—was a 20-week full-stack application built to help students manage their academic and personal lives with ease. Inspired by the need for a more streamlined scheduling tool, we designed a responsive, glassmorphism-styled calendar that supports daily, weekly, and monthly views. Users can create and drag tasks onto the calendar, track progress with visual cues, and filter by categories.

            This project was developed as part of a two-quarter software engineering sequence at Cal Poly, with a strong emphasis on collaborative design, modular development, and scalable architecture. Our team of four used Agile and Scrum methodologies, with sprint planning, retrospectives, and test-driven development. We prototyped extensively in Figma, adhered to the Airbnb JavaScript style guide, and enforced consistent code formatting with Prettier. Unit testing was implemented with Jest and Mockingoose, and end-to-end testing with Cypress. The app was deployed using GitHub Actions and Microsoft Azure with automated CI/CD pipelines.

            You can view our <a href="https://docs.google.com/document/d/1Fz2-bfkzLIIPGZ4-d8aPm8EmG54CU7LEYFt8FAtgBU0/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline text-blue-400">Tech Spec Document</a> and <a href="https://www.figma.com/design/RsnEo5BwDszqFhOEGhyLjq/Calendar-Draft?node-id=0-1&t=U7Q0zdARQcLMbMq3-1" target="_blank" rel="noopener noreferrer" className="underline text-blue-400">Figma Prototype</a> for additional project context and design work.
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside text-white/80">
            <li>React</li>
            <li>JavaScript</li>
            <li>Tailwind CSS & custom CSS (glassmorphism UI)</li>
            <li>Node.js & Express (backend API)</li>
            <li>MongoDB (database)</li>
            <li>Jest & Mockingoose for unit testing</li>
            <li>Cypress for end-to-end testing</li>
            <li>Microsoft Azure (deployed via GitHub Actions with CI/CD)</li>
          </ul>
        </div>

        {/* Feature Highlight */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Feature Highlight</h2>
          <p>
            One standout feature is the dynamic calendar with multi-view support (daily, weekly, monthly), wrapped in a clean, glassmorphism interface. This allowed for a user interface that was visually distinctive and clean, while keeping the core functionality of a calendar intact.
          </p>
        </div>
      </div>
    </div>
  );
}