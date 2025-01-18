import "./App.css";
import HomeLanding1 from "./components/HomeLanding1";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import Team from "./Pages/Team";
import About from "./Pages/About";
import Jobs from "./Pages/Jobs";

export default function App() {
  return (
    <>
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<HomeLanding1 />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />

        {/* Add other routes as needed */}
      </Routes>

      <Footer />
    </>
  );
}
