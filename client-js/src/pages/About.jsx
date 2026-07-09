function About() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-5">

        <h1 className="text-center text-primary">
          About Us
        </h1>

        <hr />

        <p className="lead">
          Welcome to the Book Doctor Appointment System.
        </p>

        <p>
          Our application helps patients find doctors, book appointments,
          and manage healthcare services quickly and securely.
        </p>

        <div className="row mt-4">

          <div className="col-md-4">
            <div className="card text-center p-3">
              <h3>👨‍⚕️ 50+</h3>
              <p>Doctors</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center p-3">
              <h3>👨‍👩‍👧‍👦 1000+</h3>
              <p>Patients</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center p-3">
              <h3>📅 5000+</h3>
              <p>Appointments</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;