

export const Skills = () => {

  const developmentSkills = ["Ruby on Rails", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Bootstrap", "React.js"]

  const tools = ["Git", "GitHub", "Notion", "Figma", "Asana", "Heroku", "Restful APIs"]

  return (
    <section
      id="skills"
      className="flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
          Technical Skills
        </h2>


        <div className="rounded-xl p-8 border-white/10 border ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover.-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Development</h3>
              <div className="flex flex-wrap gap-2">
                {developmentSkills.map((skill, key) =>(
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                      {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover.-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, key) =>(
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                      {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
