export const createSlug = (text: string = ""): string =>
  text
    .toString()
    .normalize("NFKD")
    .replace(/[‐-―]/g, "-")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\./g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
