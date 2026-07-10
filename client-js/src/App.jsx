import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";
import Doctors from "./pages/Doctors";
import BookAppointment from "./pages/BookAppointment";
import Admin from "./pages/Admin";
import AddDoctor from "./pages/AddDoctor";
import EditDoctor from "./pages/EditDoctor";
import Appointments from "./pages/Appointments";
import DoctorDetails from "./pages/DoctorDetails";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mt-4 mb-5">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/admin-login" element={<AdminLogin />} />

          <Route path="/register" element={<Register />} />

          <Route path="/doctors" element={<Doctors />} />

          <Route path="/doctor/:id" element={<DoctorDetails />} />

          <Route path="/book" element={<BookAppointment />} />

          <Route path="/appointments" element={<Appointments />} />

          <Route path="/admin" element={<Admin />} />

          <Route path="/add-doctor" element={<AddDoctor />} />

          <Route path="/edit-doctor/:id" element={<EditDoctor />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={<About />} />

          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

        </Routes>
      </div>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;