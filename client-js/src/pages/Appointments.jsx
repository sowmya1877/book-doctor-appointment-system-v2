import { useEffect, useState } from "react";
import axios from "axios";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get(
        "https://book-doctor-appointment-system-v2.onrender.com/api/appointments"
      );
      console.log(res.data);
      setAppointments(res.data);
    } catch (err) {
      console.log(err);
      alert("Unable to fetch appointments");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `https://book-doctor-appointment-system-v2.onrender.com/api/appointments/${id}/status`,
        { status }
      );

      alert("Status Updated Successfully");
      fetchAppointments();
    } catch (err) {
      console.log(err);
      alert("Status Update Failed");
    }
  };

  const deleteAppointment = async (id) => {
    if (!window.confirm("Delete this appointment?")) return;

    try {
      await axios.delete(
        `https://book-doctor-appointment-system-v2.onrender.com/api/appointments/${id}`
      );

      alert("Appointment Deleted");
      fetchAppointments();
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        Appointment Management
      </h2>

      {appointments.length === 0 ? (
        <h4 className="text-center text-danger">
          No Appointments Found
        </h4>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment.patientName}</td>

                <td>
                  {appointment.doctor
                    ? appointment.doctor.name
                    : "No Doctor"}
                </td>

                <td>
                  {new Date(
                    appointment.appointmentDate
                  ).toLocaleDateString()}
                </td>

                <td>{appointment.status}</td>

                <td>
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() =>
                      updateStatus(
                        appointment._id,
                        "Approved"
                      )
                    }
                  >
                    Approve
                  </button>

                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() =>
                      updateStatus(
                        appointment._id,
                        "Rejected"
                      )
                    }
                  >
                    Reject
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      deleteAppointment(
                        appointment._id
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Appointments;