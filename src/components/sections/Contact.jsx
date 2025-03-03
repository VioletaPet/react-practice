import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex items-center justify-center mb-20"
    >
      <div className='max-w-4xl mx-auto px-6'>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
          Get in touch!
        </h2>
        <div className='flex items-center gap-6 px-6 py-3 border border-gray-400 rounded-2xl shadow-lg'>
          <a
            href="mailto:v.petkovic@protonmail.com"
            className='flex items-center gap-2 text-gray-600 hover:text-blue-500 transition'
          >
            <Mail className='w-5 h-5' />
            v.petkovic@protonmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/violeta-petkovic"
            target='blank'
            className='flex items-center gap-2 text-gray-600 hover:text-blue-500 transition'
          >
            <Linkedin className='w-5 h-5' />
            LinkedIn
          </a>
        </div>
      </div>
    </section>

  );
};

export default Contact
