'use client';

import Navbar from '@/app/components/Navbar';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import EducationSection from '@/app/components/EducationSection';
import SkillsSection from '@/app/components/SkillsSection';
import ProjectsSection from './app/components/Projects';
import ContactFooter from './app/components/ContactFooter';
import Footer from './app/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}
