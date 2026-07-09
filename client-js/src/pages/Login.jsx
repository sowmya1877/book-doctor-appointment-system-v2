import { useState } from "react";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://book-doctor-appointment-system-v2.onrender.com/api/auth/login",
        user
      );

      alert(res.data.message);

      localStorage.setItem("token", res.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify({
          email: user.email,
          name: user.name || "User",
        })
      );

    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div style={{ width: "350px", margin: "40px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          Login
        </button>

        <div className="text-center mt-3">
          <a href="/forgot-password">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;