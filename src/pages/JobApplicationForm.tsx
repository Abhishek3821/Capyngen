import { useState, type FormEvent } from "react";
import { useParams } from "react-router-dom";

const JobApplicationForm = () => {
  const { country, jobId } = useParams<{ country: string; jobId: string }>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: send the application to the backend
    setSubmitted(true);
  };

  return (
    <main className="page">
      <section className="page-hero">
        <h1>Apply — {jobId}</h1>
        <p>
          Placeholder application form for {jobId} ({country}).
        </p>

        {submitted ? (
          <p className="form-success">
            Application submitted. We will get back to you soon.
          </p>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <label>
              Full name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Cover letter
              <textarea name="coverLetter" rows={5} />
            </label>
            <button type="submit">Submit application</button>
          </form>
        )}
      </section>
    </main>
  );
};

export default JobApplicationForm;
