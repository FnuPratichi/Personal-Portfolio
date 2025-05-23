import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const projectList = [
    {
      title: 'Real-Time Chat Application',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'JWT', 'Redux'],
      description: 'Built a secure chat app with encrypted messaging, media upload, and online status.',
      videoEmbedId: '1WRpuoJyzMzqjmWUzUjMMW50ic80OpDLo',
      link: 'https://drive.google.com/file/d/1WRpuoJyzMzqjmWUzUjMMW50ic80OpDLo/view',
    },
    {
      title: 'Admin-Student Management System',
      tech: ['Python','Flask', 'Docker', 'AWS', 'PostgreSQL','CI/CD'],
      description: 'Role-based admin/student platform with Flask API and CI/CD on AWS.',
      videoEmbedId: '1gQp89QeTFFnt53DU6_wp3h_2lQwUn1Zg',
      link: 'https://drive.google.com/file/d/1gQp89QeTFFnt53DU6_wp3h_2lQwUn1Zg/view',
    },
    {
      title: 'Movie Recommendation System',
      tech: ['Python', 'Flask', 'Docker', 'AWS','Postman','CI/CD'],
      description: 'Dockerized Flask-based recommender deployed on AWS EC2 using cosine similarity.',
      videoEmbedId: '1xZlz1639uakNRlEQW08abXfkQ0W-FJWJ',
      link: 'https://drive.google.com/file/d/1xZlz1639uakNRlEQW08abXfkQ0W-FJWJ/view',
    },
    {
      title: 'Distributed Event-Based Architecture in Python',
      tech: ['Python', 'Kafka', 'Docker', 'Microservices'],
      description:
        'Implemented a distributed event-based architecture using Kafka and microservices for order, notification, transaction, and analytics handling.',
      link: 'https://github.com/FnuPratichi/Distributed-Event-Based-Architecture-in-Python',
      images: ['/event.png'], 
    },
    {
      title: 'Full-Stack E-Commerce Platform',
      tech: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL','JWT'],
      description: 'JWT-based authentication, admin dashboard, 10k+ mock transactions.',
      link: 'https://github.com/FnuPratichi/Full-Stack-E-Commerce-Platform-using-Spring-Boot',
      images: ['/featured.png', '/product_home.png'],
    },
    {
      title: 'RAG-based Chatbot using LangChain and AstraDB',
      tech: ['LLM','LangChain', 'AstraDB', 'Python', 'OpenAI'],
      description:
        'Built a Retrieval-Augmented Generation chatbot for context-aware Q&A using custom documents.',
      link: 'https://github.com/FnuPratichi/RAG-based-Chatbot-using-LangChain-and-AstraDB',
      images: ['/rag.png','/ragchatbot.png']
    },
    {
      title: 'E-Commerce User Behavior Analysis',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      description:
        'Analyzed and visualized user behavior data to find key trends and retention insights.',
      link: 'https://github.com/FnuPratichi/E-Commerce-User-Behavior-Analysis',
      images: ['/ecommerce_user.png','/useranalysis.png'],
    },
    {
      title: 'Dimensionality Reduction in High-Dimensional Data',
      tech: ['Python', 'PCA', 't-SNE', 'Autoencoders','LDA'],
      description:
        'Comparative study of PCA, t-SNE, LDA, and autoencoders on high-dimensional datasets.',
      link: 'https://github.com/FnuPratichi/Dimensionality-Reduction-in-high-dimensional-data',
      images: ['/dimension.png'],
    },
    {
      title: 'IMDB SQL Explorer',
      tech: ['SQL', 'Python'],
      description:
        'Query and explore IMDb movie database using structured queries with Python visualization.',
      link: 'https://github.com/FnuPratichi/IMDB-SQL-Explorer',
      images: ['/SQLimdb.png'],
    },
    {
      title: 'Covid-19 Mortality Prediction using R',
      tech: ['R', 'Shiny','Random Forest', 'Data Preprocessing', 'Classification'],
      description:
        'Predicted mortality risk using health records and classification models in R.',
      link: 'https://github.com/FnuPratichi/Covid_19-Mortality-Prediction-using-R',
      images: ['/corona.png'],
    },
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const newIndex = {};
        projectList.forEach((project, index) => {
          if (project.images) {
            const current = prev[index] || 0;
            newIndex[index] = (current + 1) % project.images.length;
          }
        });
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [projectList]);

  return (
    <div id="projects" className="min-h-screen bg-black text-white px-4 md:px-16 py-12">
      {/* Anime-style badge */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        className="text-center mb-6"
      >
        <span className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-black text-lg md:text-xl font-extrabold rounded-full shadow-lg animate-pulse">
          🔥 30+ Projects Completed in Dev | ML | AI | Research
        </span>
      </motion.div>

      {/* Main heading */}
      <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
        Projects
      </h2>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-black rounded-xl shadow-md hover:shadow-yellow-500 transition duration-300 border border-gray-800 hover:border-yellow-400 overflow-hidden"
          >
            <div className="h-48 md:h-64 overflow-hidden">
              {project.videoEmbedId ? (
                <iframe
                  src={`https://drive.google.com/file/d/${project.videoEmbedId}/preview`}
                  allow="autoplay"
                  className="w-full h-full"
                ></iframe>
              ) : (
                <img
                  src={project.images[currentImageIndex[index] ?? 0]}
                  alt={`${project.title} demo`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-3 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-yellow-300 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
