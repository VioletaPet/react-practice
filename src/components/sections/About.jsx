import { RevealEffect } from "../RevealEffect"

export const About = () => {

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealEffect>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>


          <div className="rounded-xl p-8 border-black/10 border ">
            <p className="text-gray-600 text-lg md:text-xl text-justify mb-6">
              Driven by fascination and curiosity about tech, I love building the bridge between well performing backend code and intuitive frontend design to make seamless, user-focused applications come to life.
            </p>
            <p className="text-gray-600 text-lg md:text-xl text-justify mb-6">
              Before transitioning into tech, I gained valuable experience in project management and leadership roles. These positions equipped me with strong organizational, problem-solving, and interpersonal skills - qualities that complement my technical knowledge and support my career switch.
            </p>
            <p className="text-gray-600 text-lg md:text-xl text-justify mb-6">
              My ultimate goal?<br/>
              To broaden my skills, deepen my understanding of programming concepts and one day become a true coding-goddess with great logical problem-solving ability!
            </p>
            <p className="text-gray-600 text-lg md:text-xl text-justify mb-6">
              Now that I have made my future plans sound inspiring, let me gracefully transition back into the pigeon. Because in my spare time, you will find me wobbling through new yoga poses (occasionally falling over), crocheting gifts for loved ones or on my next travel adventure to explore nature and find delicious local snacks along the way.
            </p>
          </div>
        </div>
      </RevealEffect>
    </section>
  )
}
