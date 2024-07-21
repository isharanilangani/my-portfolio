import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import SkillsProfessional from "./pages/SkillProfessional";
import SkillsCommunication from "./pages/SkillCommunication";
import SkillsSoft from "./pages/SkillSoft";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Service from "./pages/Services";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Skill from "./pages/Skill";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/skill/professional" element={<SkillsProfessional />} />
        <Route path="/skill/communication" element={<SkillsCommunication />} />
        <Route path="/skill/soft" element={<SkillsSoft />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
