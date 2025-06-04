import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  return (
    <section
      id="education"
      className="py-16 bg-neutral-900 text-white text-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 animate-glow drop-shadow-lg">
        🎓 My Education
      </h2>

      <div className="max-w-5xl mx-auto px-4 space-y-14">
        {/* George Washington University */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-neutral-900 rounded-3xl shadow-2xl p-6 md:p-10 border border-neutral-800 hover:shadow-yellow-500/20 transition-shadow text-left"
>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-1">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              George Washington University
            </h3>
            <div className="text-sm text-neutral-400 text-right">
              <p>Washington, DC, USA</p>
              <p className="text-xs">Jan 2024 – May 2025</p>
            </div>
          </div>
          <p className="text-base text-indigo-300 mb-2 font-semibold">
            Master's in Computer Science{' '}
            <span className="text-sm text-neutral-400">| GPA: 3.77 / 4.0</span>
          </p>
          <p className="text-base text-amber-300 font-medium mb-2">
            🎖️ SEAS Merit Award Recipient
          </p>
          <p className="text-sm text-emerald-200 leading-relaxed">
            <span className="font-semibold text-white">Relevant Courses:</span>{' '}
            Design & Analysis of Algorithms, Computer System Architecture, Machine Learning, Data Mining, Cloud Computing, DBMS, Advanced DBMS, Advanced Software Paradigms
          </p>
        </motion.div>

        {/* Pune University */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-neutral-900 rounded-3xl shadow-2xl p-6 md:p-10 border border-neutral-800 hover:shadow-yellow-500/20 transition-shadow text-left"
>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-1">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Savitribai Phule Pune University
            </h3>
            <div className="text-sm text-neutral-400 text-right">
              <p>Pune, India</p>
              <p className="text-xs">June 2016 – Oct 2020</p>
            </div>
          </div>
          <p className="text-base text-indigo-300 mb-2 font-semibold">
            Bachelor's in Computer Science{' '}
            <span className="text-sm text-neutral-400">| GPA: 8.71 / 10</span>
          </p>
          <p className="text-sm text-emerald-200 leading-relaxed">
            <span className="font-semibold text-white">Relevant Courses:</span>{' '}
            Data Structures, Algorithms, OOPs, Artificial Intelligence, Statistics & Calculus, Discrete Mathematics, Computer Networks, Software Engineering, Web Technology
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
