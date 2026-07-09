const express = require("express");
const router = express.Router();

const {
  addDoctor,
  getDoctors,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/doctorController");

// Add Doctor
router.post("/add", addDoctor);

// Get All Doctors
router.get("/", getDoctors);

// Update Doctor
router.put("/:id", updateDoctor);

// Delete Doctor
router.delete("/:id", deleteDoctor);

module.exports = router;