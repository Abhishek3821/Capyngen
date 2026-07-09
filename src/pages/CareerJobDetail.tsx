import { Link, useParams } from "react-router-dom";

const CareerJobDetail = () => {
  const { country, jobId } = useParams<{ country: string; jobId: string }>();

  return (
    <main className="page">
      <section className="page-hero">
        <h1>Job: {jobId}</h1>
        <p>
          Placeholder for the job detail page ({country} / {jobId}). Replace
          with the real job description.
        </p>
        <Link to={`/careers/${country}/jobs/${jobId}/apply`}>
          Apply for this job &rarr;
        </Link>
      </section>
    </main>
  );
};

export default CareerJobDetail;
