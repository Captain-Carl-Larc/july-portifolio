
const projects = [
  {
    image: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg',
    title: 'E-commerce Store',
    description: 'A fully functional e-commerce platform with product listings, cart management, and user authentication.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveLink: '#', // Replace with actual link
    githubLink: '#', // Replace with actual link
  },
  {
    image: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg',
    title: 'Task Management App',
    description: 'A responsive task manager application allowing users to create, update, and delete tasks.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    image: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg',
    title: 'Personal Blog',
    description: 'A minimalist blog platform with a clean UI for publishing articles and managing content.',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    image: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg',
    title: 'Weather Dashboard',
    description: 'Displays current weather conditions and forecasts using a third-party API.',
    technologies: ['React', 'API Integration', 'CSS'],
    liveLink: '#',
    githubLink: '#',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white px-4 py-20">
      <div className="mx-auto max-w-7xl container">
        <h2 className="mb-12 font-bold text-gray-900 text-4xl text-center">
          My Projects
        </h2>

        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-xl border border-gray-900 rounded-lg overflow-hidden hover:scale-105 transition duration-300 ease-in-out transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="mb-3 font-semibold text-gray-800 text-2xl">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600 text-base line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-950 px-3 py-1 rounded-full font-medium text-white text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-orange-500 hover:bg-gray-800 px-4 py-2 border-gray-900 hover:border-gray-800 rounded-lg font-medium text-white hover:text-orange-500 md:text-lg text-center transition duration-300 ease-in-out"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 hover:bg-orange-500 px-4 py-2 border border-gray-900 hover:border-gray-800 rounded-lg font-medium text-orange-500 hover:text-gray-800 hover:text-white md:text-lg text-center transition duration-300 ease-in-out"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
