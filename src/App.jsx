import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionsPage from "./pages/AdmissionPage"
import HomePage from "./pages/HomePage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import DeveloperInfoPopup from "./components/Developerinfo/DeveloperInfoPopup";
const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>

      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Saniya Sadale"
          studentPhotoUrl="\Images\46.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/coursespage" element={<CoursesPage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/admissionspage" element={<AdmissionsPage />} />
        </Routes>
        <ChatbotComponent />
      </Router>
    </>
  )
}

export default App;