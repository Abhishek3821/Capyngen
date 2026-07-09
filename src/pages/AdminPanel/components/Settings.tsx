import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <main className="admin">
      <header className="admin__header">
        <h1>Settings</h1>
        <Link to="/admin-dashboard">&larr; Dashboard</Link>
      </header>
      <p>
        Placeholder for the admin settings page. Add site configuration here.
      </p>
    </main>
  );
};

export default Settings;
