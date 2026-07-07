import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
