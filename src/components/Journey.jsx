import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'ICPC Foundation',
    location: 'Remote, USA',
    role: 'Intern',
    period: 'May 2025 – Present',
    description: [
      'Working under the guidance of Prof. Christian Lim from Columbia University',
      'Collaborating with international peers to solve real-world algorithmic challenges and develop reusable problem-solving templates in Java and Python',
      'Participating in advanced training sessions on algorithms, data structures, and system design led by ICPC mentors and peers',
    ],
  },
  {
    company: 'Northeast Big Data Innovation Hub',
    location: 'Remote, USA',
    role: 'Data Science Researcher (TDSP Program - Volunteer)',
    period: 'October 2024 – January 2025',
    description: [
      'Preprocessed and transformed large-scale NYC crash datasets (2012–2024)',
      'Applied geospatial and time series analytics to uncover crash trends by region and time',
      'Led analysis on crash severity variation during rush vs. non-rush hours',
    ],
    certificate: 'https://drive.google.com/file/d/1xtM1SDSHj4rJB5k5XMIDjTGgJhgNRXvH/view?usp=drive_link',
  },
  {
    company: (
      <>
        <strong>Amdocs</strong> Development Centre India LLP
      </>
    ),
    location: 'Pune, India',
    roles: [
      {
        title: 'Experienced Software Engineer',
        date: 'May 2022 – October 2022',
        bullets: [
          'Enhanced backend data migration accuracy by 40% through optimized SQL validation',
          'Developed automation scripts integrated with Jenkins CI/CD, reducing test time by 50%',
          'Led DevOps pipeline improvements enabling 30% faster and more stable deployments',
        ],
      },
      {
        title: 'Software Engineer',
        date: 'December 2020 – May 2022',
        bullets: [
          'Tested telecom OSS/BSS features, improving defect identification by 20%',
          'Automated SQL-based data verification to prevent post-release issues',
          'Supported CI/CD workflows, increasing system uptime and stability',
        ],
      },
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

      


      {/* Experience Section */}
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
                <div className="absolute w-4 h-4 bg-gradient-to-br from-sky-300 to-emerald-500 shadow-lg rounded-full -left-2 top-2 group-hover:scale-110 transition-transform" />

                {/* Line: Company | Location */}
                <p className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors mb-1">
                  {exp.company}{' '}
                  <span className="text-sm text-sky-400 font-medium ml-2">
                    | {exp.location}
                  </span>
                </p>

                {/* Line: Role | Period */}
                {exp.role && (
                  <p className="text-base md:text-lg font-semibold text-indigo-300 mb-2">
                    {exp.role}{' '}
                    <span className="text-sm text-sky-400 font-normal ml-2">
                      | {exp.period}
                    </span>
                  </p>
                )}

                {/* Standard experience bullets */}
                {exp.description && (
                  <ul className="list-disc pl-6 space-y-1 text-emerald-200 mb-2">
                    {exp.description.map((line, i) => (
                      <li
                        key={i}
                        className="hover:text-indigo-300 transition-all duration-200"
                        dangerouslySetInnerHTML={{ __html: line }}
                      />
                    ))}
                  </ul>
                )}

                {/* Multi-role case */}
                {exp.roles && (
                  <div className="space-y-5 mt-2">
                    {exp.roles.map((role, rIndex) => (
                      <div key={rIndex}>
                        <p className="text-base md:text-lg font-semibold text-indigo-300">
                          {role.title}{' '}
                          <span className="text-sm text-sky-400 font-normal ml-2">
                            | {role.date}
                          </span>
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-emerald-200 mt-1">
                          {role.bullets.map((bullet, bIndex) => (
                            <li
                              key={bIndex}
                              className="hover:text-indigo-300 transition-all duration-200"
                              dangerouslySetInnerHTML={{ __html: bullet }}
                            />
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Optional certificate link */}
                {exp.certificate && (
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sky-300 hover:text-indigo-400 underline mt-2 inline-block"
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
