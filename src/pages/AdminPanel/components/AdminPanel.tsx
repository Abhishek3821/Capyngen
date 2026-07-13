import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Link } from "react-router-dom";
import { useToast } from "../hooks/useToast";
import {
  BlogService,
  formatBlogDate,
  type Blog,
  type BlogPayload,
} from "../../../services/blogService";

interface BlogFormState {
  title: string;
  author: string;
  description: string;
  content: string;
  image: string;
  category: string;
  group: string;
  date: string;
  tags: string;
  metaTitle: string;
  metaDescription: string;
  schema: string;
}

const emptyForm: BlogFormState = {
  title: "",
  author: "",
  description: "",
  content: "",
  image: "",
  category: "",
  group: "",
  date: "",
  tags: "",
  metaTitle: "",
  metaDescription: "",
  schema: "",
};

const toFormState = (blog: Blog): BlogFormState => ({
  title: blog.title || "",
  author: blog.author || "",
  description: blog.description || "",
  content: blog.content || "",
  image: blog.image || "",
  category: blog.category || "",
  group: blog.group || "",
  date: blog.date ? blog.date.slice(0, 10) : "",
  tags: (blog.tags || []).join(", "),
  metaTitle: blog.metaTitle || "",
  metaDescription: blog.metaDescription || "",
  schema: blog.schema ? JSON.stringify(blog.schema, null, 2) : "",
});

const inputClass =
  "w-full border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-500 bg-white";

const AdminPanel = () => {
  const { showToast } = useToast();

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<Blog | null>(null);
  const [form, setForm] = useState<BlogFormState>(emptyForm);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setBlogs(await BlogService.listAll());
      } catch (err) {
        console.error("Blog fetch failed", err);
        showToast("Failed to load blogs", "error");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [showToast]);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setFormOpen(true);
  };

  const openEdit = (blog: Blog) => {
    setEditing(blog);
    setForm(toFormState(blog));
    setFormOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeForm = () => {
    setFormOpen(false);
    setEditing(null);
    setForm(emptyForm);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setUploading(true);
      const url = await BlogService.uploadImage(file);
      setForm((f) => ({ ...f, image: url }));
      showToast("Image uploaded", "success");
    } catch (err) {
      console.error(err);
      showToast("Image upload failed", "error");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (uploading) {
      showToast("Please wait, image is uploading...", "info");
      return;
    }

    if (
      !form.title.trim() ||
      !form.author.trim() ||
      !form.description.trim() ||
      !form.content.trim() ||
      !form.category.trim() ||
      !form.group.trim() ||
      !form.date
    ) {
      showToast("Please fill all required fields", "error");
      return;
    }

    if (!form.image) {
      showToast("Please upload an image first", "error");
      return;
    }

    let schema: Record<string, unknown> | undefined;
    if (form.schema.trim()) {
      try {
        schema = JSON.parse(form.schema);
      } catch {
        showToast("Schema must be valid JSON", "error");
        return;
      }
    }

    const payload: BlogPayload = {
      title: form.title.trim(),
      author: form.author.trim(),
      description: form.description.trim(),
      content: form.content.trim(),
      image: form.image,
      category: form.category.trim(),
      group: form.group.trim(),
      date: form.date,
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      metaTitle: form.metaTitle.trim(),
      metaDescription: form.metaDescription.trim(),
      schema,
    };

    try {
      setSaving(true);
      if (editing) {
        const updated = await BlogService.update(editing._id, payload);
        setBlogs((current) =>
          current.map((b) =>
            b._id === editing._id ? { ...b, ...updated } : b,
          ),
        );
        showToast("Blog updated successfully", "success");
      } else {
        const created = await BlogService.create(payload);
        setBlogs((current) => [created, ...current]);
        showToast("Blog created successfully", "success");
      }
      closeForm();
    } catch (err) {
      showToast(
        err instanceof Error ? err.message : "Failed to save blog",
        "error",
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (blog: Blog) => {
    if (!window.confirm(`Delete "${blog.title}"? This cannot be undone.`)) {
      return;
    }
    try {
      await BlogService.remove(blog._id);
      setBlogs((current) => current.filter((b) => b._id !== blog._id));
      showToast("Blog deleted", "success");
    } catch (err) {
      showToast(
        err instanceof Error ? err.message : "Failed to delete blog",
        "error",
      );
    }
  };

  return (
    <main className="admin min-h-screen bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="admin__header flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-slate-900">Blog Admin</h1>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={formOpen ? closeForm : openCreate}
              className="px-4 py-2 rounded-md bg-[#0a1128] text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {formOpen ? "Close form" : "+ New Blog"}
            </button>
            <Link
              to="/admin-dashboard"
              className="text-sm text-slate-500 hover:text-slate-900"
            >
              &larr; Dashboard
            </Link>
          </div>
        </header>

        {/* Create / Edit form */}
        {formOpen && (
          <form
            onSubmit={handleSubmit}
            className="mb-10 border border-slate-200 rounded-xl p-6 space-y-4"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {editing ? "Edit Blog" : "Create Blog"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="text-sm text-slate-600">
                Title *
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className={inputClass}
                />
              </label>
              <label className="text-sm text-slate-600">
                Author *
                <input
                  name="author"
                  value={form.author}
                  onChange={handleChange}
                  className={inputClass}
                />
              </label>
              <label className="text-sm text-slate-600">
                Category *
                <input
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className={inputClass}
                />
              </label>
              <label className="text-sm text-slate-600">
                Group *
                <input
                  name="group"
                  value={form.group}
                  onChange={handleChange}
                  className={inputClass}
                />
              </label>
              <label className="text-sm text-slate-600">
                Date *
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className={inputClass}
                />
              </label>
              <label className="text-sm text-slate-600">
                Tags (comma separated)
                <input
                  name="tags"
                  value={form.tags}
                  onChange={handleChange}
                  className={inputClass}
                />
              </label>
            </div>

            <label className="block text-sm text-slate-600">
              Short description *
              <textarea
                name="description"
                rows={2}
                value={form.description}
                onChange={handleChange}
                className={inputClass}
              />
            </label>

            <label className="block text-sm text-slate-600">
              Content (HTML) *
              <textarea
                name="content"
                rows={10}
                value={form.content}
                onChange={handleChange}
                className={`${inputClass} font-mono`}
              />
            </label>

            <div className="text-sm text-slate-600">
              Cover image *
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block mt-1 text-sm"
              />
              {uploading && (
                <p className="text-xs text-slate-500 mt-1">Uploading...</p>
              )}
              {form.image && (
                <img
                  src={form.image}
                  alt="Preview"
                  className="mt-3 h-32 rounded-md object-cover"
                />
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="text-sm text-slate-600">
                Meta title (SEO)
                <input
                  name="metaTitle"
                  value={form.metaTitle}
                  onChange={handleChange}
                  className={inputClass}
                />
              </label>
              <label className="text-sm text-slate-600">
                Meta description (SEO)
                <input
                  name="metaDescription"
                  value={form.metaDescription}
                  onChange={handleChange}
                  className={inputClass}
                />
              </label>
            </div>

            <label className="block text-sm text-slate-600">
              Schema JSON-LD (optional)
              <textarea
                name="schema"
                rows={4}
                value={form.schema}
                onChange={handleChange}
                className={`${inputClass} font-mono`}
              />
            </label>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={saving || uploading}
                className="px-5 py-2 rounded-md bg-[#0a1128] text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {saving
                  ? "Saving..."
                  : editing
                    ? "Update Blog"
                    : "Publish Blog"}
              </button>
              <button
                type="button"
                onClick={closeForm}
                className="px-5 py-2 rounded-md border border-slate-300 text-slate-600 text-sm font-medium hover:bg-slate-50"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Blog list */}
        {loading ? (
          <p className="text-sm text-slate-500">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="text-sm text-slate-500">
            No blogs yet. Create your first blog with the button above.
          </p>
        ) : (
          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Group</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {blogs.map((blog) => (
                  <tr key={blog._id} className="hover:bg-slate-50">
                    <td className="px-4 py-3">
                      {blog.image ? (
                        <img
                          src={blog.image}
                          alt=""
                          className="w-14 h-10 object-cover rounded"
                        />
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 font-medium text-slate-900 max-w-xs">
                      <span className="line-clamp-2">{blog.title}</span>
                    </td>
                    <td className="px-4 py-3">{blog.category || "—"}</td>
                    <td className="px-4 py-3">{blog.group || "—"}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {formatBlogDate(blog.date || blog.createdAt) || "NA"}
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => openEdit(blog)}
                        className="text-blue-700 hover:underline mr-4"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(blog)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
};

export default AdminPanel;
