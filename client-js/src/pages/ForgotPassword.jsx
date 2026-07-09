import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Password reset link sent to " + email);

    setEmail("");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-5">

        <h2 className="text-center mb-4">
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            className="btn btn-primary w-100"
          >
            Send Reset Link
          </button>

        </form>

      </div>
    </div>
  );
}

export default ForgotPassword;