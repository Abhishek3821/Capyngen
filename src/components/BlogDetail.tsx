import { Link, useParams } from "react-router-dom";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <main className="page">
      <section className="page-hero">
        <h1>Blog: {slug}</h1>
        <p>
          Placeholder for the blog detail page. Load the article matching the
          slug &quot;{slug}&quot; here.
        </p>
        <Link to="/news-and-updates">&larr; Back to News &amp; Updates</Link>
      </section>
    </main>
  );
};

export default BlogDetail;
