import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Full-Stack Web Engineering",
      target: "Startups & Scale-ups",
      description: "End-to-end development of complex web applications using the MERN stack. I handle everything from database schema design to frontend interactivity.",
      outcome: "Scalable, maintainable, and high-performance digital products ready for market."
    },
    {
      id: 2,
      title: "Blockchain & Smart Contracts",
      target: "DeFi & Web3 Founders",
      description: "Secure smart contract development on Ethereum and EVM-compatible chains. Including tokenomics implementation, DApp integration, and security auditing.",
      outcome: "Trustless, decentralized systems with rock-solid security and gas efficiency."
    },
    {
      id: 3,
      title: "API & Backend Architecture",
      target: "Enterprise Clients",
      description: "Designing robust RESTful and GraphQL APIs. Focusing on microservices architecture, heavy load balancing, and database optimization.",
      outcome: "Reliable infrastructure capable of handling high concurrency and complex data flows."
    },
    {
      id: 4,
      title: "System Optimization",
      target: "Product Teams",
      description: "Auditing and refactoring legacy codebases for performance. Improving load times, SEO scores, and server response times.",
      outcome: "Reduced operational costs and significantly improved user experience."
    }
  ];

  return (
    <div name="services" className="w-full bg-surface py-24 section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-heading mb-4">Technical Services</h2>
        <p className="text-body text-lg max-w-2xl mx-auto">
          I partner with ambitious teams to build software that defines industries.
          Not just writing code, but delivering business outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all duration-300">
            <h3 className="text-2xl font-bold text-heading mb-2">{service.title}</h3>
            <p className="text-secondary text-sm font-semibold uppercase tracking-wider mb-4">
              For: {service.target}
            </p>
            <p className="text-body mb-6 leading-relaxed">
              {service.description}
            </p>
            <div className="border-t border-slate-100 pt-4">
              <strong className="text-heading text-sm uppercase tracking-wide block mb-1">Outcome</strong>
              <p className="text-body text-sm font-medium">{service.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;