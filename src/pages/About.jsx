export default function About() {
  return (
    <div className="min-h-screen bg-[#222831] text-white px-6 py-12 font-mono animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">

        {/* Left Column: Portrait - Two stacked image cards, ready for future carousel */}
        <div className="flex flex-col gap-6 w-full">
          <div className="bg-[#393E46] p-4 rounded-lg shadow-lg">
            <img src="/darryl.JPG" alt="Portrait of Darryl James Cruz" className="w-full object-cover rounded-md aspect-[9/16]" />
          </div>
          {/* <div className="bg-[#393E46] p-4 rounded-lg shadow-lg">
            <img src="/darryl2.JPG" alt="Another photo of Darryl James Cruz" className="w-full object-cover rounded-md aspect-[9/16]" />
          </div> */}
        </div>

        

        {/* Right Column: Info Cards */}
        <div className="grid gap-8">
          <section className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-2">Basics</h1>
            <p>I'm an undergraduate student at Cal Poly San Luis Obispo majoring in Computer Science, with a focus on Software Engineering and full stack development. I'm originally from Santa Maria and love learning how technology can be applied to build meaningful, real-world solutions.</p>
          </section>

          <section className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Interests</h2>
            <p>I'm passionate about software engineering, particularly in web and mobile application development. Ever since I was a kid, I’ve been fascinated by how people interact with software. I was always curious—asking questions about how apps worked, how websites responded to clicks, and what made a design feel smooth or clunky. That natural curiosity has stayed with me, evolving into a deep interest in building user-centric tools that improve real-life experiences. I love exploring how thoughtful design and functional code can work together to solve meaningful problems.</p>
          </section>

          <section className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Work</h2>
            <p>I’m currently working as a Student Lead at the Cal Poly Information Technology Services Service Desk. Over the past two years, I've helped manage support requests, trained new student assistants, and contributed to improving internal workflows and support systems.</p>
          </section>

          <section className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Skills</h2>
            <p>I have experience in Python, Java, C, HTML/CSS, and MySQL. I'm an enthusiastic learner who isn’t afraid to ask questions and dig into new technologies. I believe that curiosity and the willingness to grow are some of the most important skills in tech.</p>
          </section>

          <section className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Context</h2>
            <p>
              If you would like to contact me, you can reach me at <a href="mailto:darryljamescruz@gmail.com" className="text-white/80 underline hover:text-white">darryljamescruz@gmail.com</a> or connect with me on <a href="https://www.linkedin.com/in/darryljamescruz/" target="_blank" rel="noopener noreferrer" className="text-white/80 underline hover:text-white">LinkedIn</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
