import { Link } from "react-router-dom";
import { useToast } from "../hooks/useToast";

const CareerAdminPanel = () => {
  const { showToast } = useToast();

  return (
    <main className="admin">
      <header className="admin__header">
        <h1>Career Admin</h1>
        <Link to="/admin-dashboard">&larr; Dashboard</Link>
      </header>
      <p>
        Placeholder for the career admin panel. Manage job postings and
        applications here.
      </p>
      <button
        type="button"
        onClick={() => showToast("Toast system is working", "success")}
      >
        Test toast
      </button>
    </main>
  );
};

export default CareerAdminPanel;
