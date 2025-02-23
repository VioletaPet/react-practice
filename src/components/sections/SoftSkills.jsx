import { RevealEffect } from "../RevealEffect"

export const SoftSkills = () => {

  const softSkills = ["Adaptability", "Leadership", "Interpersonal Communication", "Resourcefulness", "Cultural Sensitivity", "Organization", "Time Management"]

  return (
    <section
      className="flex items-center justify-center py-20"
    >
      <RevealEffect>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
            Soft Skills
          </h2>


          <div className="rounded-xl p-8 border-white/10 border ">
            <div className="rounded-xl p-6 hover.-translate-y-1 transition-all text-center">
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, key) =>(
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                      {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealEffect>
    </section>
  )
}
