const Appointment = require("../models/appointment");
const mongoose = require("mongoose");

// Book Appointment
const bookAppointment = async (req, res) => {
  try {
    const { patientName, doctor, appointmentDate } = req.body;

    const appointment = new Appointment({
      patientName,
      doctor,
      appointmentDate,
    });

    await appointment.save();

    res.status(201).json({
      message: "Appointment Booked Successfully",
      appointment,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Appointments
const getAppointments = async (req, res) => {
  try {
    console.log("===== Appointment API Called =====");
    console.log("Connection State:", mongoose.connection.readyState);
    console.log("Database:", mongoose.connection.name);

    const appointments = await Appointment.find().populate(
      "doctor",
      "name specialization"
    );

    console.log("Appointments Found:", appointments.length);

    res.status(200).json(appointments);
  } catch (error) {
    console.log("Appointment Error:");
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Appointment Status
const updateAppointmentStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({
        message: "Appointment Not Found",
      });
    }

    res.status(200).json({
      message: "Appointment Status Updated Successfully",
      appointment,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Appointment
const deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        message: "Appointment Not Found",
      });
    }

    res.status(200).json({
      message: "Appointment Deleted Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  bookAppointment,
  getAppointments,
  updateAppointmentStatus,
  deleteAppointment,
};