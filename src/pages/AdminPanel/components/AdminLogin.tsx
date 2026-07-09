import { useState, type FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { isAdminLoggedIn, loginAdmin } from "../services/authService";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isAdminLoggedIn()) {
    return <Navigate to="/admin-dashboard" replace />;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loginAdmin(email, password)) {
      navigate("/admin-dashboard", { replace: true });
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <main className="admin admin--center">
      <form className="form admin__card" onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
        {error && <p className="form-error">{error}</p>}
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </main>
  );
};

export default AdminLogin;
