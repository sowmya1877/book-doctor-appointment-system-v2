const express = require("express");
const router = express.Router();

const {
  bookAppointment,
  getAppointments,
  updateAppointmentStatus,
  deleteAppointment,
} = require("../controllers/appointmentController");

// Book Appointment
router.post("/book", bookAppointment);

// Get All Appointments
router.get("/", getAppointments);

// Update Appointment Status
router.put("/:id/status", updateAppointmentStatus);

// Delete Appointment
router.delete("/:id", deleteAppointment);

module.exports = router;