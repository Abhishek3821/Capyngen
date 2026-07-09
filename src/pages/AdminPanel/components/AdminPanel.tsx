import { Link } from "react-router-dom";
import { useToast } from "../hooks/useToast";

const AdminPanel = () => {
  const { showToast } = useToast();

  return (
    <main className="admin">
      <header className="admin__header">
        <h1>Blog Admin</h1>
        <Link to="/admin-dashboard">&larr; Dashboard</Link>
      </header>
      <p>
        Placeholder for the blog admin panel. Build blog create / edit /
        delete here.
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

export default AdminPanel;
