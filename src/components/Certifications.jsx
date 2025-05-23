import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Meta - Database Structures and Management with MySQL",
    issuer: "Coursera",
    year: "Mar 2025",
    credentialId: "G05Q0CPX9J8D",
    link: "https://www.coursera.org/account/accomplishments/verify/G05Q0CPX9J8D",
  },
  {
    title: "Data Science Bootcamp",
    issuer: "Udemy",
    year: "Oct 2024",
    image: "/Bootcamp certificate.png",
    link: "https://www.udemy.com/certificate/UC-6359e3f1-95ed-4873-9fbd-face459c0f3d/",
  },
  {
    title: "HackerRank SQL (Basic)",
    issuer: "HackerRank",
    year: "Jan 2025",
    image: "/SQLBasic.png",
    link: "https://www.hackerrank.com/certificates/d81588fc0c3a",
  },
  {
    title: "HackerRank SQL (Intermediate)",
    issuer: "HackerRank",
    year: "Jan 2025",
    image: "/SQL Intermediate.png",
    link: "https://www.hackerrank.com/certificates/88d9db66b560",
  },

  {
    title: "AWS Academy Machine Learning Foundations",
    issuer: "Amazon Web Services (AWS)",
    year: "Jul 2024",
    skills: "Machine Learning · AWS Cloud · NLP · Computer Vision",
    link: "https://www.credly.com/badges/7617c2cd-dba8-4c3f-a92d-a9fd39fe50ee/public_url",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    year: "May 2024",
    skills: "AWS Cloud · AWS Core Services · AWS Architecture · AWS Pricing",
    link: "https://www.credly.com/badges/63248c3d-f61a-4863-8cea-c9b01939a67c/",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="px-6 py-6 bg-black text-yellow-100 dark:bg-yellow-50 dark:text-black"
    >
  <div className="max-w-5xl mx-auto text-center"></div>
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-8 flex justify-center items-center gap-2"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Award className="w-6 h-6" />
          Certifications
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 dark:bg-white shadow-md rounded-lg p-4 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold leading-snug">{cert.title}</h3>
              <p className="text-xs text-yellow-400 dark:text-black mt-0.5">
                {cert.issuer} • {cert.year}
              </p>
              {cert.credentialId && (
                <p className="text-xs text-gray-400 mt-0.5">ID: {cert.credentialId}</p>
              )}
              {cert.skills && (
                <p className="text-xs mt-1 text-gray-300 dark:text-gray-700">{cert.skills}</p>
              )}
              <a
                href={cert.link}
                className="text-yellow-300 underline hover:text-yellow-400 dark:text-blue-600 dark:hover:text-blue-800 block text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
