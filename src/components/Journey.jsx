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
    certificate: '/TDSP Certificate.png', // Path must be relative to the `public/` folder in production
  },
  {
    company: 'Amdocs Development Centre India LLP – Pune, India',
    client: 'Comcast Client',
    role: 'Software Engineer (Experienced)',
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
        <motion.p
          className="text-lg text-center text-emerald-200 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A short summary of my work experience..
        </motion.p>
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
              <ul className="list-disc pl-6 space-y-2 text-emerald-200 mb-3">
                {exp.description.map((line, i) => (
                  <li key={i} className="transition-all duration-300 hover:text-indigo-300">
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
  );
};

export default Journey;
