export default function About() {
  return (
    <div className="min-h-screen bg-[#222831] text-white px-6 py-12 font-mono">

      <div className="mb-10 max-w-2xl mx-auto">
        <div className="bg-[#393E46] p-4 rounded-lg shadow-lg">
          <img src="/darryl.JPG" alt="Portrait of Darryl James Cruz" className="w-full object-cover rounded-md aspect-[9/16]" />
        </div>
      </div>

      <div className="grid gap-8 max-w-2xl mx-auto">
        <section className="bg-[#393E46] p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-2">Basics</h1>
          <p>I'm an undergraduate student at Cal Poly San Luis Obispo majoring in Computer Science, with a focus on Software Engineering and full stack development. I'm originally from Santa Maria and love learning how technology can be applied to build meaningful, real-world solutions.</p>
        </section>

        <section className="bg-[#393E46] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Interests</h2>
          <p>I'm passionate about software engineering, particularly in web and mobile application development. I’m especially interested in using my skills to design and develop tools that address real-life problems and improve people’s daily experiences.</p>
        </section>

        <section className="bg-[#393E46] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Work</h2>
          <p>I’m currently working as a Student Lead at the Cal Poly Information Technology Services Service Desk. Over the past two years, I've helped manage support requests, trained new student assistants, and contributed to improving internal workflows and support systems.</p>
        </section>

        <section className="bg-[#393E46] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Skills</h2>
          <p>I have experience in Python, Java, C, HTML/CSS, and MySQL. I'm an enthusiastic learner who isn’t afraid to ask questions and dig into new technologies. I believe that curiosity and the willingness to grow are some of the most important skills in tech.</p>
        </section>

        <section className="bg-[#393E46] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Context</h2>
          <p>If you would like to contact me, you can through darryljamescruz@gmail.com or add me on LinkedIn.</p>
        </section>

        <section className="bg-[#393E46] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Resume</h2>
          <p>You can view or download my resume <a href="/resume.pdf" className="text-blue-400 underline hover:text-blue-300" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </section>
      </div>
    </div>
  )
}