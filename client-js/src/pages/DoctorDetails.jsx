import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function DoctorDetails() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    getDoctor();
  }, []);

  const getDoctor = async () => {
    try {
      const res = await axios.get(
        "https://book-doctor-appointment-system-v2.onrender.com/api/doctors"
      );

      const selectedDoctor = res.data.find((doc) => doc._id === id);

      if (selectedDoctor) {
        setDoctor(selectedDoctor);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (!doctor) {
    return (
      <div className="container mt-5">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
            alt="Doctor"
            width="180"
          />
        </div>

        <h2 className="text-center mt-3">{doctor.name}</h2>

        <hr />

        <p>
          <strong>Specialization:</strong> {doctor.specialization}
        </p>

        <p>
          <strong>Experience:</strong> {doctor.experience} Years
        </p>

        <p>
          <strong>Consultation Fee:</strong> ₹{doctor.fees}
        </p>

        <p>
          <strong>Availability:</strong>{" "}
          {doctor.available ? "Available" : "Not Available"}
        </p>

        <Link to="/book" className="btn btn-success mt-3">
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

export default DoctorDetails;