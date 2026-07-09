function DoctorCard({ doctor }) {
  return (
    <div className="card shadow-lg mb-4">

     <img
  src={doctor.image}
  alt={doctor.name}
  className="card-img-top p-3"
  style={{
    height: "220px",
    objectFit: "cover",
  }}
/>

      <div className="card-body">

        <h4 className="text-primary">
          {doctor.name}
        </h4>

        <p>
          <b>Specialization:</b><br />
          {doctor.specialization}
        </p>

        <p>
          <b>Experience:</b><br />
          {doctor.experience} Years
        </p>

        <p>
          <b>Consultation Fee:</b><br />
          ₹{doctor.fees}
        </p>

      </div>
    </div>
  );
}

export default DoctorCard;