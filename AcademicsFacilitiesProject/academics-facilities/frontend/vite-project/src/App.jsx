import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Dashboard from "./pages/Dashboard";
import Academics from "./pages/Academics";
import Facilities from "./pages/Facilities";

import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicAcademics from "./pages/PublicAcademics";
import PublicFacilities from "./pages/PublicFacilities";

function App() {
  return (
<Routes>

  {/* 🌐 PUBLIC */}
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/academics" element={<PublicAcademics />} />
  <Route path="/facilities" element={<PublicFacilities />} />

  {/* 🔐 ADMIN */}
  <Route path="/login" element={<Login />} />

  <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

  <Route path="/admin/academics" element={<ProtectedRoute><Academics /></ProtectedRoute>} />
  <Route path="/admin/facilities" element={<ProtectedRoute><Facilities /></ProtectedRoute>} />

</Routes>
  );
}

export default App;