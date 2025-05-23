import React from 'react';
import { 
  FaPython, FaJava, FaAws, FaDocker, FaLinux, FaGitAlt, FaHtml5, FaCss3Alt, FaCogs 
} from 'react-icons/fa';
import {
  SiSpringboot, SiMongodb, SiFastapi, SiJavascript,
  SiPostgresql, SiMysql, SiDjango, SiFlask, SiKubernetes,
  SiApachekafka, SiElasticsearch, SiTerraform
} from 'react-icons/si';

const skills = [
  // Languages & Databases
  { name: 'Python', icon: <FaPython size={18} /> },
  { name: 'Java', icon: <FaJava size={18} /> },
  { name: 'JavaScript', icon: <SiJavascript size={18} /> },
  { name: 'HTML/CSS', icon: <><FaHtml5 size={12} /><FaCss3Alt size={12} /></> },
  { name: 'PostgreSQL/MySQL', icon: <SiPostgresql size={18} /> },
  { name: 'MongoDB', icon: <SiMongodb size={18} /> },
  { name: 'Elasticsearch', icon: <SiElasticsearch size={18} /> },

  // Frameworks & APIs
  { name: 'Django', icon: <SiDjango size={18} /> },
  { name: 'Flask', icon: <SiFlask size={18} /> },
  { name: 'FastAPI', icon: <SiFastapi size={18} /> },
  { name: 'Spring Boot', icon: <SiSpringboot size={18} /> },
  { name: 'Apache Kafka', icon: <SiApachekafka size={18} /> },
  { name: 'WebSocket', icon: <FaCogs size={18} /> },
  { name: 'RESTful APIs', icon: <FaCogs size={18} /> },

  // Cloud & DevOps
  { name: 'AWS', icon: <FaAws size={18} /> },
  { name: 'Docker', icon: <FaDocker size={18} /> },
  { name: 'Kubernetes', icon: <SiKubernetes size={18} /> },
  { name: 'Git', icon: <FaGitAlt size={18} /> },
  { name: 'CI/CD', icon: <FaCogs size={18} /> },
  { name: 'Linux', icon: <FaLinux size={18} /> },
  { name: 'Terraform', icon: <SiTerraform size={18} /> },

  // Machine Learning & Data Science
  { name: 'NumPy' },
  { name: 'Pandas' },
  { name: 'Matplotlib' },
  { name: 'Plotly' },
  { name: 'Beautiful Soup' },
  { name: 'Keras' },
  { name: 'TensorFlow' },
  { name: 'PyTorch' },
  { name: 'Scikit-Learn' },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-yellow-400 py-8 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-5 gap-2 text-xs">
          {skills.map(({ name, icon }, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-gray-900 rounded px-2 py-2 hover:scale-105 transition-transform duration-200"
              style={{ minHeight: '56px' }}
              title={name}
            >
              <div className="mb-1 text-yellow-400">
                {icon || <span className="text-yellow-400 font-semibold">•</span>}
              </div>
              <p className="whitespace-nowrap truncate max-w-full">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
