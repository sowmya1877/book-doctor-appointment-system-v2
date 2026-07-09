import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="text-center text-white p-5 rounded"
        style={{ backgroundColor: "#0d6efd" }}
      >
        <h1 className="display-4">🏥 Book Doctor Appointment System</h1>

        <p className="lead">
          Book appointments with experienced doctors anytime, anywhere.
        </p>

        <Link to="/doctors" className="btn btn-light btn-lg mt-3">
          Book Now
        </Link>
      </div>

      {/* Features */}
      <div className="container mt-5">
        <div className="row">

          <div className="col-md-4">
            <div className="card shadow p-4">
              <h3>👨‍⚕️ Expert Doctors</h3>
              <p>Choose from qualified and experienced doctors.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4">
              <h3>📅 Easy Booking</h3>
              <p>Book appointments within a few seconds.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4">
              <h3>🔒 Secure</h3>
              <p>Your personal information is protected and secure.</p>
            </div>
          </div>

        </div>
      </div>

      {/* About */}
      <div className="container mt-5">
        <h2 className="text-center">About Our Hospital</h2>

        <p className="text-center mt-3">
          Our online Book Doctor Appointment System helps patients find
          experienced doctors, book appointments quickly, and manage their
          appointments from anywhere.
        </p>
      </div>
    </div>
  );
}

export default Home;