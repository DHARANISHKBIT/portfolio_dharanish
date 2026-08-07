import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/about/about";
import Skills from "./components/about/skills";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Projects from "./components/project/project";
import Resume from "./components/resume/projects";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import { ThemeProvider } from "./context/ThemeContext";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollProgress />
        <Preloader />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <BackToTop />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;