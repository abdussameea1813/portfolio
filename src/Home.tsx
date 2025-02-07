'use client';

import Navbar from './app/components/Navbar';
import HeroSection from './app/components/HeroSection';
import EducationSection from './app/components/EducationSection';
import SkillsSection from './app/components/SkillsSection';
import Projects from './app/components/Projects';
import ContactFooter from './app/components/ContactFooter';
import Footer from './app/components/Footer';


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <EducationSection />
      <SkillsSection />
      <Projects />
      <ContactFooter />
      <Footer />
    </>
  );
}
