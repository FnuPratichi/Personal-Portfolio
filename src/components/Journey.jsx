import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'ICPC Foundation (Remote, USA)',
    role: 'Intern',
    period: 'May 2025 – Present',
    description: [
      'Working under the guidance of Prof. Christian Lim from Columbia University',
      'Collaborating with international peers to solve real-world algorithmic challenges and develop reusable problem-solving templates in Java and Python',
      'Participating in advanced training sessions on algorithms, data structures, and system design led by ICPC mentors and peers',
    ],
  },
  {
    company: 'Transportation Data Science Project Community (Remote, USA)',
    role: 'Data Science Researcher',
    period: 'October 2024 – January 2025',
    description: [
      'Preprocessed and transformed large-scale NYC crash datasets (2012–2024)',
      'Applied geospatial and time series analytics to uncover crash trends by region and time',
      'Led analysis on crash severity variation during rush vs. non-rush hours',
    ],
    certificate: 'https://drive.google.com/file/d/1xtM1SDSHj4rJB5k5XMIDjTGgJhgNRXvH/view?usp=drive_link',
  },
  {
    company: 'Amdocs Development Centre India LLP – Pune, India',
    client: 'Comcast Client',
    role: 'Experienced Software Engineer',
    period: 'May 2022 – October 2022',
    description: [
      'Enhanced backend data migration accuracy by 40% through optimized SQL validation',
      'Developed automation scripts integrated with Jenkins CI/CD, reducing test time by 50%',
      'Led DevOps pipeline improvements enabling 30% faster and more stable deployments',
    ],
  },
  {
    company: 'Amdocs Development Centre India LLP – Comcast Client',
    role: 'Software Engineer',
    period: 'December 2020 – May 2022',
    description: [
      'Tested telecom OSS/BSS features, improving defect identification by 20%',
      'Automated SQL-based data verification to prevent post-release issues',
      'Supported CI/CD workflows, increasing system uptime and stability',
    ],
  },
];

const Journey = () => {
  return (
    <>
      {/* Logo Section */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10">
            {[
              { src: 'ICPC.png', alt: 'ICPC Foundation', title: 'ICPC Foundation' },
              { src: 'amdocs.png', alt: 'Amdocs', title: 'Amdocs' },
              { src: 'Comcast.png', alt: 'Comcast', title: 'Comcast' },
              { src: 'Hub.png', alt: 'TDSP', title: 'Transportation Data Science Project' },
              { src: 'GWU.png', alt: 'George Washington University', title: 'George Washington University' },
              { src: 'SPPU.png', alt: 'Savitribai Phule Pune University', title: 'Savitribai Phule Pune University' },
            ].map(({ src, alt, title }, index) => (
              <div
                key={index}
                className="w-28 h-28 sm:w-32 sm:h-32 bg-neutral-900 rounded-md flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/logos/${src}`}
                  alt={alt}
                  title={title}
                  className="object-contain w-20 h-20 sm:w-24 sm:h-24"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>

     
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 animate-glow drop-shadow-lg">
  🎓 My Education
</h2>

<div className="max-w-5xl mx-auto px-4 space-y-14">
  {/* GWU */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="bg-neutral-900 rounded-3xl shadow-2xl p-6 md:p-10 border border-neutral-800 hover:shadow-yellow-500/20 transition-shadow"
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
      Master's in Computer Science <span className="text-sm text-neutral-400">| GPA: 3.77 / 4.0</span>
    </p>
    <p className="text-base text-amber-300 font-medium mb-2">🎖️ SEAS Merit Award Recipient</p>
    <p className="text-sm text-emerald-200 leading-relaxed">
      <span className="font-semibold text-white">Relevant Courses:</span> Design & Analysis of Algorithms, Computer System Architecture, Machine Learning, Data Mining, Cloud Computing, DBMS, Advanced DBMS, Advanced Software Paradigms
    </p>
  </motion.div>

  {/* Pune University */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="bg-neutral-900 rounded-3xl shadow-2xl p-6 md:p-10 border border-neutral-800 hover:shadow-yellow-500/20 transition-shadow"
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
      Bachelor's in Computer Science <span className="text-sm text-neutral-400">| GPA: 8.71 / 10</span>
    </p>
    <p className="text-sm text-emerald-200 leading-relaxed">
      <span className="font-semibold text-white">Relevant Courses:</span> Data Structures, Algorithms, OOPs, Artificial Intelligence, Statistics & Calculus, Discrete Mathematics, Computer Networks, Software Engineering, Web Technology
    </p>
  </motion.div>
</div>


      {/* ⚙️ Work Experience Section */}
      <section
        id="journey"
        className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black text-emerald-300 font-mono"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-emerald-400 to-indigo-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            ⚙️ My Work Experience
          </motion.h2>

          <div className="relative border-l-4 border-emerald-400 ml-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-14 ml-6 group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.25 }}
              >
                <div className="absolute w-4 h-4 bg-gradient-to-br from-sky-300 to-emerald-500 shadow-lg rounded-full -left-2 top-2 group-hover:scale-110 transition-transform"></div>
                <h3 className="text-2xl font-semibold text-white group-hover:text-sky-300 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-sm italic text-sky-400 mb-1">{exp.company}</p>
                <p className="text-sm text-indigo-400 mb-3">{exp.period}</p>
                <ul className="list-disc pl-6 space-y-1 text-emerald-200 mb-2">
                  {exp.description.map((line, i) => (
                    <li key={i} className="hover:text-indigo-300 transition-all duration-200">
                      {line}
                    </li>
                  ))}
                </ul>
                {exp.certificate && (
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sky-300 hover:text-indigo-400 underline"
                  >
                    📄 View Certificate
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Journey;
