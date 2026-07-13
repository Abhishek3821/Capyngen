const API_BASE: string =
  import.meta.env.VITE_API_BASE_URL || "https://api.capyngen.com";

export interface Blog {
  _id: string;
  title: string;
  author?: string;
  description?: string;
  content?: string;
  image?: string;
  category?: string;
  group?: string;
  date?: string;
  tags?: string[];
  slug?: string;
  metaTitle?: string;
  metaDescription?: string;
  schema?: Record<string, unknown>;
  createdAt?: string;
  updatedAt?: string;
}

export interface BlogPagination {
  page?: number;
  totalPages?: number;
  total?: number;
}

export interface BlogListResponse {
  blogs: Blog[];
  pagination?: BlogPagination;
}

export interface BlogPayload {
  title: string;
  author: string;
  description: string;
  content: string;
  image: string;
  category: string;
  group: string;
  date: string;
  tags: string[];
  metaTitle?: string;
  metaDescription?: string;
  schema?: Record<string, unknown>;
}

const request = async <T>(path: string, options?: RequestInit): Promise<T> => {
  const res = await fetch(`${API_BASE}${path}`, options);
  const data = (await res.json().catch(() => ({}))) as T & {
    message?: string;
  };
  if (!res.ok) {
    throw new Error(data.message || `Request failed (${res.status})`);
  }
  return data;
};

export const BlogService = {
  // GET blogs (paginated)
  async list(page = 1, limit = 10): Promise<BlogListResponse> {
    const data = await request<BlogListResponse>(
      `/api/blogs?page=${page}&limit=${limit}`,
    );
    return {
      blogs: Array.isArray(data.blogs) ? data.blogs : [],
      pagination: data.pagination,
    };
  },

  // GET all blogs
  async listAll(): Promise<Blog[]> {
    const data = await request<BlogListResponse>(`/api/blogs?limit=1000`);
    return Array.isArray(data.blogs) ? data.blogs : [];
  },

  // POST new blog
  async create(payload: BlogPayload): Promise<Blog> {
    const data = await request<{ blog: Blog }>(`/api/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return data.blog;
  },

  // PUT update blog by ID
  async update(id: string, payload: BlogPayload): Promise<Blog> {
    const data = await request<{ blog: Blog }>(`/api/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return data.blog;
  },

  // DELETE blog by ID
  async remove(id: string): Promise<void> {
    await request(`/api/blogs/${id}`, { method: "DELETE" });
  },

  // POST image upload, returns hosted URL
  async uploadImage(file: File): Promise<string> {
    const formData = new FormData();
    formData.append("image", file);
    const data = await request<{ url: string }>(`/api/upload`, {
      method: "POST",
      body: formData,
    });
    return data.url;
  },
};

export const formatBlogDate = (value?: string): string => {
  if (!value) return "";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
