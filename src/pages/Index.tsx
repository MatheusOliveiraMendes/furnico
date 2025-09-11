import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Products from '../components/Products';
import Experience from '../components/Experience';
import Materials from '../components/Materials';
import Testimonials from '../components/Testimonials';

const Index: React.FC = () => {
  return (
    <main className="bg-white flex flex-col overflow-hidden items-stretch">
      <Hero />
      <Features />
      <Products />
      <Experience />
      <Materials />
      <Testimonials />
    </main>
  );
};

export default Index;
