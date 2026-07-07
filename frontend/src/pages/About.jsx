import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-brand-surface rounded-2xl shadow-sm border border-brand-dark/10 overflow-hidden">
        <div className="bg-brand-primary px-8 py-12 text-brand-bg text-center">
          <h1 className="text-4xl font-bold mb-4">About GeoMap</h1>
          <p className="text-xl text-brand-bg max-w-2xl mx-auto">
            A comprehensive geographical reference tool built for modern web explorers.
          </p>
        </div>
        
        <div className="p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Our Purpose
            </h2>
            <p className="text-brand-dark leading-relaxed">
              GeoMap Reference started as a simple PHP-based utility for finding geographical data. 
              It has since evolved into a full-featured reference platform where users can search for locations, 
              find shortest routes, and save their favorite spots across the globe. Our goal is to make 
              navigating the world's data as intuitive and fast as possible.
            </p>
          </section>

          <div className="h-px bg-brand-surface w-full"></div>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              The Tech Stack
            </h2>
            <p className="text-brand-dark leading-relaxed mb-6">
              We recently overhauled our architecture to use a modern, robust, and scalable tech stack:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-brand-bg rounded-xl border border-brand-dark/10">
                <div className="w-12 h-12 bg-brand-secondary/20 text-brand-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="font-bold">FE</span>
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">Frontend</h3>
                <p className="text-sm text-brand-dark">React, Vite, and Tailwind CSS power our interactive maps and responsive UI.</p>
              </div>
              
              <div className="p-6 bg-brand-bg rounded-xl border border-brand-dark/10">
                <div className="w-12 h-12 bg-brand-success/20 text-brand-success rounded-lg flex items-center justify-center mb-4">
                  <span className="font-bold">BE</span>
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">Backend</h3>
                <p className="text-sm text-brand-dark">Java Spring Boot handles our secure APIs, JWT authentication, and business logic.</p>
              </div>
              
              <div className="p-6 bg-brand-bg rounded-xl border border-brand-dark/10">
                <div className="w-12 h-12 bg-brand-secondary text-brand-secondary rounded-lg flex items-center justify-center mb-4">
                  <span className="font-bold">DB</span>
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">Database</h3>
                <p className="text-sm text-brand-dark">MySQL stores all our persistent data, from user profiles to saved map locations.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
