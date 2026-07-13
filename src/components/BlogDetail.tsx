import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  BlogService,
  formatBlogDate,
  type Blog,
} from "../services/blogService";
import { createSlug } from "../utils/slug";

// Strip all special chars so "UI/UX Design" still matches "uiux-design"
const normalize = (text: string): string =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

const findBySlug = (blogs: Blog[], slug: string): Blog | undefined => {
  const decodedSlug = decodeURIComponent(slug);
  return blogs.find((b) => {
    if (b.slug === decodedSlug) return true;
    if (createSlug(b.title) === decodedSlug) return true;
    return normalize(b.title) === normalize(decodedSlug);
  });
};

// Blog content in the API was authored for the old dark site and carries its
// classes/inline styles (e.g. text-white); strip them so this site's own
// typography applies. Scripts are removed as a safety measure.
const cleanContent = (html: string): string => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  doc.querySelectorAll("script").forEach((el) => el.remove());
  doc.querySelectorAll("[class]").forEach((el) => el.removeAttribute("class"));
  doc.querySelectorAll("[style]").forEach((el) => el.removeAttribute("style"));
  return doc.body.innerHTML;
};

const scoreRelated = (blogs: Blog[], current: Blog): Blog[] => {
  return blogs
    .filter((b) => b._id !== current._id)
    .map((b) => {
      let score = 0;
      if (b.group && b.group === current.group) score += 5;
      if (b.tags && current.tags) {
        score += b.tags.filter((t) => current.tags!.includes(t)).length * 2;
      }
      score += new Date(b.createdAt || 0).getTime() / 100000000000;
      return { blog: b, score };
    })
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.blog);
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [related, setRelated] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        const blogs = await BlogService.listAll();
        const found = findBySlug(blogs, slug);
        setBlog(found || null);
        setRelated(found ? scoreRelated(blogs, found).slice(0, 4) : []);
      } catch (err) {
        console.error("Blog fetch failed", err);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
    window.scrollTo(0, 0);
  }, [slug]);

  // SEO: title + meta description from the blog record
  useEffect(() => {
    if (!blog) return;
    document.title = `${blog.metaTitle || blog.title} | Capyngen`;
    if (blog.metaDescription) {
      let meta = document.querySelector<HTMLMetaElement>(
        'meta[name="description"]',
      );
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = blog.metaDescription;
    }
  }, [blog]);

  const openBlog = (post: Blog) => {
    navigate(`/news-and-updates/${post.slug || createSlug(post.title)}`);
  };

  const contentHtml = useMemo(
    () => (blog?.content ? cleanContent(blog.content) : ""),
    [blog],
  );

  if (loading) {
    return (
      <main className="min-h-screen bg-white font-sans flex items-center justify-center">
        <p className="text-sm text-slate-500">Loading article...</p>
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="min-h-screen bg-white font-sans flex flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">
          Article not found
        </h1>
        <p className="text-sm text-slate-500">
          The article you are looking for does not exist or has been removed.
        </p>
        <Link
          to="/news-and-updates"
          className="text-sm font-medium text-blue-700 hover:underline"
        >
          &larr; Back to News &amp; Updates
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white font-sans">
      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Back link */}
        <Link
          to="/news-and-updates"
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-700 transition-colors mb-8"
        >
          &larr; Back to News &amp; Updates
        </Link>

        {/* Meta label */}
        <span className="block text-xs font-semibold tracking-wider text-slate-500 uppercase mb-4">
          {blog.group || blog.category || "News"}
        </span>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
          {blog.title}
        </h1>

        {/* Author / date */}
        <div className="flex flex-wrap items-center text-sm text-slate-500 mb-10">
          <span className="font-medium">{blog.author || "Capyngen Team"}</span>
          <span className="mx-2">|</span>
          <span>{blog.category || "Article"}</span>
          <span className="mx-2">|</span>
          <span>{formatBlogDate(blog.date || blog.createdAt)}</span>
        </div>

        {/* Hero image */}
        {blog.image && (
          <div className="w-full mb-12 overflow-hidden rounded-xl">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div
          className="max-w-none text-slate-700 leading-8
            [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:text-slate-900 [&_h1]:mt-12 [&_h1]:mb-5
            [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h2]:mt-10 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-900 [&_h3]:mt-8 [&_h3]:mb-3
            [&_p]:mb-5
            [&_a]:text-blue-700 [&_a]:underline
            [&_strong]:text-slate-900 [&_strong]:font-semibold
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5
            [&_li]:mb-2
            [&_blockquote]:border-l-4 [&_blockquote]:border-slate-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-slate-600 [&_blockquote]:my-6
            [&_img]:rounded-xl [&_img]:my-8 [&_img]:max-w-full"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-10 tracking-tight">
            More from Capyngen
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {related.map((item) => (
              <article
                key={item._id}
                onClick={() => openBlog(item)}
                className="group flex flex-col cursor-pointer h-full"
              >
                <div className="w-full h-48 md:h-40 lg:h-48 mb-5 overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-slate-500 mb-3 uppercase">
                  {item.group || item.category || "News"}
                </span>

                <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug mb-3 group-hover:text-blue-700 transition-colors line-clamp-4">
                  {item.title}
                </h3>

                <div className="mt-auto pt-4 flex items-center text-xs text-slate-500">
                  <span className="font-medium">
                    {item.category || "Article"}
                  </span>
                  <span className="mx-2">|</span>
                  <span>{formatBlogDate(item.date || item.createdAt)}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default BlogDetail;
