import { Link, useParams } from "react-router-dom";

const CountryCareers = () => {
  const { country } = useParams<{ country: string }>();

  return (
    <main className="page">
      <section className="page-hero">
        <h1>Careers in {country}</h1>
        <p>
          Placeholder for the {country} careers page. Replace with real
          content.
        </p>
        <Link to={`/careers/${country}/jobs`}>Browse open positions &rarr;</Link>
      </section>
    </main>
  );
};

export default CountryCareers;
