import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary shadow">
      <div className="container">

        {/* Logo */}
        <Link
          className="navbar-brand text-white fw-bold fs-3"
          to="/"
        >
          🏥 Book Doctor
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar */}
        <div className="collapse navbar-collapse" id="navbarNav">

          {/* Left Side */}
          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/doctors">
                Doctors
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/book">
                Book
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/appointments">
                Appointments
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/about">
                About
              </Link>
            </li>

          </ul>

          {/* Right Side */}
          <div className="d-flex flex-wrap gap-2">

            <Link className="btn btn-success" to="/login">
              Login
            </Link>

            <Link className="btn btn-warning" to="/register">
              Register
            </Link>

            <Link className="btn btn-info text-white" to="/profile">
              Profile
            </Link>

            <Link className="btn btn-danger" to="/admin-login">
              Admin Login
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;