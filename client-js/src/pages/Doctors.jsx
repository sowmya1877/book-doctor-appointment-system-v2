import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getDoctors();
  }, []);

  // Get all doctors
  const getDoctors = async () => {
    try {
      const res = await axios.get(
        "https://book-doctor-appointment-system-v2.onrender.com/api/doctors"
      );

      setDoctors(res.data);
    } catch (err) {
      console.log(err);
      alert("Unable to load doctors");
    }
  };

  // Delete doctor
  const deleteDoctor = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this doctor?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://book-doctor-appointment-system-v2.onrender.com/api/doctors/${id}`
      );

      alert("Doctor Deleted Successfully");

      getDoctors();
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  // Search doctors
  const filteredDoctors = doctors.filter((doctor) => {
    return (
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialization
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  });

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        Our Doctors
      </h1>

      {/* Search Box */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search doctor by name or specialization..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        {filteredDoctors.length === 0 ? (
          <h4 className="text-center">
            No Doctors Found
          </h4>
        ) : (
          filteredDoctors.map((doctor) => (
            <div className="col-md-4 mb-4" key={doctor._id}>
              <DoctorCard doctor={doctor} />

              <div className="d-grid gap-2 mt-3">
                <Link
                  to={`/doctor/${doctor._id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>

                <Link
                  to={`/edit-doctor/${doctor._id}`}
                  className="btn btn-warning"
                >
                  Edit Doctor
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteDoctor(doctor._id)}
                >
                  Delete Doctor
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Doctors;