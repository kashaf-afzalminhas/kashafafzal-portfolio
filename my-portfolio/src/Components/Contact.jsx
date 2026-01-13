import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full bg-white py-24 section-container">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-heading mb-6">Let's Build Something Scalable</h2>
        <p className="text-body text-lg mb-10 leading-relaxed">
          I am available for new projects and opportunities.
          Whether you need a full-stack architect or a blockchain engineer, let's connect.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:kashafafzal2601@gmail.com"
            className="btn-primary flex items-center justify-center text-lg"
          >
            Send Me an Email
          </a>
          <a
            href="https://www.linkedin.com/in/kashaf-afzal-minhas-160027248/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center justify-center text-lg"
          >
            Connect on LinkedIn
          </a>
        </div>

        <div className="mt-16 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Kashaf Afzal. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;