import { Link } from "react-router-dom";

const ViewReports = () => {
  return (
    <main className="admin">
      <header className="admin__header">
        <h1>Reports</h1>
        <Link to="/admin-dashboard">&larr; Dashboard</Link>
      </header>
      <p>
        Placeholder for the reports page. Show analytics and lead reports
        here.
      </p>
    </main>
  );
};

export default ViewReports;
