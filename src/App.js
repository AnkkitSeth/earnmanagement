import React, { useRef } from 'react';
import styled from 'styled-components';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Discord from './components/Discord';


function App() {
  const roadmapRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRoadmap = () => {
    roadmapRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header onRoadmapClick={scrollToRoadmap} onContactClick={scrollToContact} />
      <Hero />
      <div ref={roadmapRef}>
        <Roadmap />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer onRoadmapClick={scrollToRoadmap} onContactClick={scrollToContact} />
      <Discord />
      
    </>
  );
}

export default App;
