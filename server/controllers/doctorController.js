const Doctor = require("../models/doctor");

// Add Doctor
const addDoctor = async (req, res) => {
  try {
    const { name, specialization, experience, fees } = req.body;

    const doctor = new Doctor({
      name,
      specialization,
      experience,
      fees,
    });

    await doctor.save();

    res.status(201).json({
      message: "Doctor Added Successfully",
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Doctors
const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();

    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Doctor
const updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!doctor) {
      return res.status(404).json({
        message: "Doctor Not Found",
      });
    }

    res.status(200).json({
      message: "Doctor Updated Successfully",
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Doctor
const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);

    if (!doctor) {
      return res.status(404).json({
        message: "Doctor Not Found",
      });
    }

    res.status(200).json({
      message: "Doctor Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addDoctor,
  getDoctors,
  updateDoctor,
  deleteDoctor,
};