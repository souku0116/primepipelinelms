import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Coaching from "./pages/Coaching";
import LearningSupport from "./pages/LearningSupport";
import ELL from "./pages/ELL";
import LeaveServices from "./pages/LeaveServices";
import CollegePlacement from "./pages/CollegePlacement";
import GiftedTalented from "./pages/GiftedTalented";
import Advocacy from "./pages/Advocacy";
import IntSchool from "./pages/IntSchool";
import Assessment from "./pages/Assessment";
import Counseling from "./pages/Counseling";
import GroupClasses from "./pages/GroupClasses";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/services" element={<Services />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/learning-support" element={<LearningSupport />} />
            <Route path="/ell" element={<ELL />} />
            <Route path="/leave-services" element={<LeaveServices />} />
            <Route path="/college-placement" element={<CollegePlacement />} />
            <Route path="/gifted-talented" element={<GiftedTalented />} />
            <Route path="/advocacy" element={<Advocacy />} />
            <Route path="/international-school" element={<IntSchool />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/counseling" element={<Counseling />} />
            <Route path="/group-classes" element={<GroupClasses />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
