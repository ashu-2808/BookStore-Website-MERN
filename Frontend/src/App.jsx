import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact from "./contact/contact"; // Ensure correct import
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import About from "./About/About";

function App() {
  const [authUser] = useAuth();
  
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} /> {/* Ensure route is added */}
        <Route path="/about" element={<About />} /> {/* Ensure route is added */}
        <Route path="*" element={<Navigate to="/" />} /> {/* Handle 404 Not Found */}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
