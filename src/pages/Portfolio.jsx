export default function Portfolio() {
  const projects = [
    {
        title: "Personal Website",
        description: "My personal website built with React and Tailwind CSS.",
        link: "/portfolio/personalwebsite"        
    },
    {
      title: "The Hamburger Calendar - College Planner",
      description: "An academic planner with calendar and to-do integration.",
      image: "/images/hamburger-calendar-month.png",
      link: "/portfolio/collegeplanner"
    },
    {
    title: "RoomieSplit",
      description: "A roommate expense tracker with React, Typescript, and Tailwind CSS.",
    //   image: "/images/roomiesplit.png",
      link: "/portfolio/roomiesplit"
    },
    {
      title: "SLO Vibes",
      description: "A web app to quickly upload songs, customize slow and reverb effects, and download the transformed audio.",
    //   image: "/images/techaccess.png",
      link: "/portfolio/slowedandreverb"
    }
  ];

  return (
    <div className="min-h-screen bg-[#222831] text-white px-6 py-12 font-mono">
      <div className="max-w-2xl mx-auto grid gap-8 grid-cols-1">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="block bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg hover:scale-[1.02] hover:bg-white/20 transition-transform duration-300"
          >
            {/* <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover rounded-md mb-4 aspect-video border border-white/10 shadow"
            /> */}
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-white/70 text-sm">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}