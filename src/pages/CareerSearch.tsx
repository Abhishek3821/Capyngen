import { Link, useParams } from "react-router-dom";

const CareerSearch = () => {
  const { country } = useParams<{ country: string }>();

  return (
    <main className="page">
      <section className="page-hero">
        <h1>Job Search — {country}</h1>
        <p>
          Placeholder for the job search page. List openings for {country}{" "}
          here.
        </p>
        <Link to={`/careers/${country}/jobs/sample-job`}>
          View a sample job &rarr;
        </Link>
      </section>
    </main>
  );
};

export default CareerSearch;
