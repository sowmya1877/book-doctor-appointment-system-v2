import { useState, useEffect } from "react";
import axios from "axios";

function BookAppointment() {
  const [patientName, setPatientName] = useState("");
  const [doctor, setDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://book-doctor-appointment-system-v2.onrender.com/api/appointments/book",
        {
          patientName,
          doctor,
          appointmentDate,
        }
      );

      alert("Appointment Booked Successfully!");

      setPatientName("");
      setDoctor("");
      setAppointmentDate("");
    } catch (err) {
      console.log(err);
      alert("Booking Failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Book Appointment</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />

        <br />
        <br />

        <select
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          required
        >
          <option value="">Select Doctor</option>

          {doctors.map((doc) => (
            <option key={doc._id} value={doc._id}>
              {doc.name}
            </option>
          ))}
        </select>

        <br />
        <br />

        <input
          type="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
        />

        <br />
        <br />

        <button type="submit">
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default BookAppointment;