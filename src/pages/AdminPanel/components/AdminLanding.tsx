import { Link, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../services/authService";

const sections = [
  { label: "Manage Blogs", to: "/admin-blogs" },
  { label: "Manage Careers", to: "/admin-careers" },
  { label: "View Reports", to: "/admin-reports" },
  { label: "Settings", to: "/admin-settings" },
];

const AdminLanding = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin-login", { replace: true });
  };

  return (
    <main className="admin">
      <header className="admin__header">
        <h1>Admin Dashboard</h1>
        <button type="button" onClick={handleLogout}>
          Log out
        </button>
      </header>

      <div className="admin__grid">
        {sections.map((section) => (
          <Link key={section.to} to={section.to} className="admin__card">
            {section.label}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default AdminLanding;
