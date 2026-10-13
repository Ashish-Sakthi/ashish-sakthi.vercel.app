import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import FeaturedGame from "../components/sections/FeaturedGame";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import useReveal from "../hooks/useReveal";

function Home() {
  const location = useLocation();
  useReveal([]);

  // Honour cross-page anchor navigation (e.g. navbar links from detail page)
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (target) {
      requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <FeaturedGame />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
