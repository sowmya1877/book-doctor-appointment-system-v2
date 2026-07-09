import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Admin() {
  const [doctorCount, setDoctorCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const doctors = await axios.get(
        "https://book-doctor-appointment-system-v2.onrender.com/api/doctors"
      );

      const appointments = await axios.get(
        "https://book-doctor-appointment-system-v2.onrender.com/api/appointments"
      );

      setDoctorCount(doctors.data.length);
      setAppointmentCount(appointments.data.length);

      // Change this when you create Users API
      setUserCount(1);
    } catch (error) {
      console.log(error);
      alert("Failed to load dashboard");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">
        👨‍💼 Admin Dashboard
      </h1>

      <div className="row">
        <div className="col-md-4">
          <div className="card bg-primary text-white p-4 shadow">
            <h3>Total Doctors</h3>
            <h1>{doctorCount}</h1>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-success text-white p-4 shadow">
            <h3>Total Appointments</h3>
            <h1>{appointmentCount}</h1>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-warning text-dark p-4 shadow">
            <h3>Total Users</h3>
            <h1>{userCount}</h1>
          </div>
        </div>
      </div>

      <hr className="my-5" />

      <div className="row">
        <div className="col-md-4 mb-3">
          <Link className="btn btn-primary w-100" to="/doctors">
            Manage Doctors
          </Link>
        </div>

        <div className="col-md-4 mb-3">
          <Link className="btn btn-success w-100" to="/appointments">
            View Appointments
          </Link>
        </div>

        <div className="col-md-4 mb-3">
          <Link className="btn btn-warning w-100" to="/add-doctor">
            Add Doctor
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Admin;