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

function App() {
  return (
    <>
      <Navbar />
      <Router>
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
      </Router>
      <Footer />
    </>
  );
}

export default App;
