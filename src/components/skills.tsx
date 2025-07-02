
// You would typically import actual SVG icons or use a library like react-icons
// For simplicity, using text or basic placeholder icons here.

const skills = [
  { name: 'React', icon: '⚛️' }, // Or use a React icon SVG component
  { name: 'JavaScript', icon: 'JS' },
  { name: 'Tailwind CSS', icon: '🌬️' },
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'Node.js', icon: 'Ⓝ' },
  { name: 'Express.js', icon: '🚀' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Git', icon: '🌳' },
  { name: 'Responsive Design', icon: '📱' },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-800 px-4 py-20">
      <div className="mx-auto max-w-6xl container">
        <h2 className="mb-12 font-bold text-white text-4xl text-center">My Skills</h2>

        <div className="gap-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-900 shadow-md hover:shadow-xl p-6 rounded-lg hover:scale-105 transition duration-300 ease-in-out transform"
            >
              <div className="mb-4 text-teal-400 text-5xl">
                {/* Replace with actual icon component or SVG */}
                {skill.icon}
              </div>
              <p className="font-semibold text-white text-xl">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;