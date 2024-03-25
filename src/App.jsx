import { useState } from "react";
import Language from "./Components/Language";
import Navbar from "./Components/Navbar";
import Landing from "./Pages/Landing";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  const [language, setLanguage] = useState("english");
  const [modalOpen, setModalOpen] = useState(true);
  const [overlayActive, setOverlayActive] = useState(true); // State for overlay

  const handleClick = (event) => {
    setModalOpen(false);
    setLanguage(event.target.id);
    setOverlayActive(false); // Hide overlay when modal closes
  };

  const handleToggle = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "english" ? "french" : "english"
    );
  };

  return (
    <div className="main-container">
      <Navbar language={language} handleToggle={handleToggle} />
      <Landing language={language} />
      <Contact language={language} />
      <Footer />
      {/* Overlay */}
      {overlayActive && (
        <div className="overlay" onClick={() => setOverlayActive(false)}></div>
      )}
      {/* Language Modal */}
      {modalOpen && (
        <Language
          handleClick={handleClick}
          setOverlayActive={setOverlayActive}
        />
      )}
    </div>
  );
}

export default App;
