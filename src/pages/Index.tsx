import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Geethmila Jayasooriya | Computer Engineering Student & Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Geethmila Jayasooriya - Computer Engineering undergraduate specializing in React, full-stack development, and cloud technologies."
        />
        <meta name="keywords" content="Geethmila Jayasooriya, Software Developer, React, Full-Stack, Portfolio, Sri Lanka" />
        <link rel="canonical" href="https://geethmilajayasooriya.dev" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
