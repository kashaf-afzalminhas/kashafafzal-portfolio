import React from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "FreelanceChain",
      category: "Blockchain & MERN",
      description: "A decentralized platform enabling trustless client interactions and secure payments via smart contracts.",
      problem: "Traditional freelance platforms suffer from high fees, delayed payments, and lack of transparency.",
      solution: "Developed a Web3-integrated marketplace with an Escrow System for milestone-based release of funds.",
      features: [
        "Decentralized Escrow System",
        "Web3/MetaMask Authentication",
        "Smart Contract Payments",
        "Trustless Interactions"
      ],
      tech: ["MERN Stack", "Solidity", "Web3.js", "Ethereum"],
      impact: "Eliminated third-party dependencies for payments and enabled secure, transparent project milestones.",
      links: {
        demo: "https://github.com/kashaf-afzalminhas/Freelance-chain",
        code: "https://github.com/kashaf-afzalminhas/Freelance-chain"
      }
    },
    {
      id: 2,
      title: "Hope for Paws",
      category: "Founder & Full-Stack Dev",
      description: "Founded and built a comprehensive pet welfare ecosystem combining adoption services, e-commerce, and veterinary care.",
      problem: "Pet owners and shelters lacked a unified platform for adoptions, reliable supplies, and professional medical advice.",
      solution: "Launched a multi-module platform featuring an adoption matching engine, a full e-commerce store, and a consultancy portal.",
      features: [
        "Smart Pet Adoption System",
        "E-commerce (Food, Meds, Accessories)",
        "Free Vet Consultancy",
        "NGO Directory & Volunteer Hub"
      ],
      tech: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      impact: "Increased engagement by 30%, onboarded 30+ volunteers, and connected 6+ vets for free services.",
      links: {
        demo: "https://www.hopeforpaws.club/",
        code: "#"
      }
    },
    {
      id: 3,
      title: "Tauris ERP",
      category: "Enterprise Software",
      description: "A custom ERP system designed for modular business workflows and role-based access control.",
      problem: "Off-the-shelf ERPs were too rigid or expensive for specific modular business needs.",
      solution: "Engineered a flexible, role-based ERP with a clean UI and scalable backend architecture.",
      features: [
        "Role-Based Access Control",
        "Modular Workflows",
        "Real-time Filters",
        "Responsive Dashboard"
      ],
      tech: ["React.js", "Node.js", "MongoDB", "Express", "Material UI", "Tailwind CSS"],
      impact: "Ensured scalability and maintainability with a clean separation of concerns and optimized state handling.",
      links: {
        demo: "https://github.com/kashaf-afzalminhas/tauris",
        code: "https://github.com/kashaf-afzalminhas/tauris"
      }
    }
  ];

  return (
    <div name="projects" className="w-full bg-background py-24 section-container">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-heading mb-4">Featured Projects</h2>
        <p className="text-body text-lg max-w-2xl">
          A selection of real-world products built to solve complex business challenges.
          Focusing on performance, security, and scalability.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-secondary text-xs font-semibold uppercase tracking-wider rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-heading mb-3">{project.title}</h3>
                <p className="text-body text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-sm font-bold text-heading uppercase tracking-wide mb-2">The Problem</h4>
                    <p className="text-body text-sm">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-heading uppercase tracking-wide mb-2">The Solution</h4>
                    <p className="text-body text-sm">{project.solution}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-heading uppercase tracking-wide mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-body text-sm">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-100 pt-6 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-md border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-heading uppercase tracking-wide mb-2">Business Impact</h4>
                    <p className="text-primary font-medium">{project.impact}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 pl-0 lg:pl-8">
                <div className="flex flex-col gap-4 w-full">
                  <a href={project.links.demo} className="btn-primary text-center">Live Demo</a>
                  <a href={project.links.code} className="btn-secondary text-center">View Code</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;