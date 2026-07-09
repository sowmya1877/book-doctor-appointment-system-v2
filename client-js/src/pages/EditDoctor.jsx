import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditDoctor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    experience: "",
    fees: "",
  });

  useEffect(() => {
    getDoctor();
  }, []);

  const getDoctor = async () => {
    try {
      const res = await axios.get(
        "https://book-doctor-appointment-system-v2.onrender.com/api/doctors"
      );

      const selectedDoctor = res.data.find((d) => d._id === id);

      if (selectedDoctor) {
        setDoctor(selectedDoctor);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  };

  const updateDoctor = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://book-doctor-appointment-system-v2.onrender.com/api/doctors/${id}`,
        doctor
      );

      alert("Doctor Updated Successfully");
      navigate("/doctors");
    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Doctor</h2>

      <form onSubmit={updateDoctor}>
        <input
          className="form-control mb-3"
          name="name"
          value={doctor.name}
          onChange={handleChange}
          placeholder="Doctor Name"
        />

        <input
          className="form-control mb-3"
          name="specialization"
          value={doctor.specialization}
          onChange={handleChange}
          placeholder="Specialization"
        />

        <input
          className="form-control mb-3"
          name="experience"
          value={doctor.experience}
          onChange={handleChange}
          placeholder="Experience"
        />

        <input
          className="form-control mb-3"
          name="fees"
          value={doctor.fees}
          onChange={handleChange}
          placeholder="Fees"
        />

        <button className="btn btn-success">
          Update Doctor
        </button>
      </form>
    </div>
  );
}

export default EditDoctor;