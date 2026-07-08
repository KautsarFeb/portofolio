import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { supabase } from './lib/supabase';

import GtaBackground from './components/GtaBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from "./components/Certificates";
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';
import type { Project } from './types';
import type { Certificate } from "./types";

function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    async function loadProjects() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.error(error);
        return;
      }

      setProjects(data || []);
    }

    loadProjects();
  }, []);

  useEffect(() => {
  async function loadCertificates() {
    const { data, error } = await supabase
      .from("certificates")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error(error);
      return;
    }

    setCertificates(data || []);
  }

  loadCertificates();
}, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects projects={projects} />
      <Education />
      <Certificates certificates={certificates} />
      <Contact />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <GtaBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
