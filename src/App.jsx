import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Coaching from "./pages/Coaching";
import ELL from "./pages/ELL";
import LeaveServices from "./pages/LeaveServices";
import CollegePlacement from "./pages/CollegePlacement";
import Advocacy from "./pages/Advocacy";
import Assessment from "./pages/Assessment";
import Counseling from "./pages/Counseling";
import GroupClasses from "./pages/GroupClasses";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Portal from "./pages/Portal";

import supabase from "./services/supabaseClient";

// Expose supabase globally for easier access in components
window.supabase = supabase;

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/coaching" element={<Coaching />} />
              <Route path="/ell" element={<ELL />} />
              <Route path="/leave-services" element={<LeaveServices />} />
              <Route path="/college-placement" element={<CollegePlacement />} />
              <Route path="/advocacy" element={<Advocacy />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/counseling" element={<Counseling />} />
              <Route path="/group-classes" element={<GroupClasses />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/portal" element={<Portal />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
