import { useState } from "react";
import axios from "axios";

function AddDoctor() {
  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    experience: "",
    fees: "",
    image: "",
  });

  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://book-doctor-appointment-system-v2.onrender.com/api/doctors/add",
        doctor
      );

      alert(res.data.message);

      setDoctor({
        name: "",
        specialization: "",
        experience: "",
        fees: "",
        image: "",
      });
    } catch (err) {
      console.log(err);
      alert("Failed to add doctor");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">➕ Add Doctor</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Doctor Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={doctor.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Specialization</label>
            <input
              type="text"
              className="form-control"
              name="specialization"
              value={doctor.specialization}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Doctor Image URL</label>
            <input
              type="text"
              className="form-control"
              name="image"
              value={doctor.image}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Experience (Years)</label>
            <input
              type="number"
              className="form-control"
              name="experience"
              value={doctor.experience}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Consultation Fee (₹)</label>
            <input
              type="number"
              className="form-control"
              name="fees"
              value={doctor.fees}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddDoctor;