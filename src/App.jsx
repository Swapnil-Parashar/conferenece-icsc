// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutTheConference from "./pages/AboutPage";
import ConferenceCommittee from "./pages/CommitteePage";
import FAQ from "./pages/FaqPage";
import Events from "./pages/EventsPage";
import ImportantDates from "./pages/ImportantDatesPage";
import Login from "./pages/auth/Login";
import { AuthProvider } from "./contexts/AuthContext"; // Import the AuthProvider

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutTheConference />} />
            <Route path="/committee" element={<ConferenceCommittee />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/events" element={<Events />} />
            <Route path="/importantDates" element={<ImportantDates />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
