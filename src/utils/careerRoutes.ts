// Country-aware, relatable Careers routes:
//   /careers
//   /careers/:country                      e.g. /careers/india
//   /careers/:country/jobs
//   /careers/:country/jobs/:jobId
//   /careers/:country/jobs/:jobId/apply

// Canonical country list (keep in sync with Careers regionData).
export const CAREER_COUNTRIES: string[] = [
  "India", "Canada", "USA", "Argentina", "Brazil", "Chile", "Colombia",
  "Ecuador", "Mexico", "Peru", "Uruguay", "Australia", "Singapore", "Japan",
  "UK", "Germany", "France", "UAE", "South Africa",
];

// "South Africa" -> "south-africa", "USA" -> "usa"
export const countryToSlug = (country?: string): string =>
  String(country || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

const SLUG_TO_COUNTRY: Record<string, string> = CAREER_COUNTRIES.reduce(
  (acc, name) => {
    acc[countryToSlug(name)] = name;
    return acc;
  },
  {} as Record<string, string>,
);

// "south-africa" -> "South Africa"; falls back to title-casing unknown slugs.
export const slugToCountry = (slug?: string): string => {
  if (!slug) return "";
  const key = String(slug).toLowerCase();
  if (SLUG_TO_COUNTRY[key]) return SLUG_TO_COUNTRY[key];
  return key
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
};

export const careerRoutes = {
  home: () => "/careers",
  country: (country?: string) => `/careers/${countryToSlug(country)}`,
  jobs: (country?: string) => `/careers/${countryToSlug(country)}/jobs`,
  jobDetail: (country: string | undefined, jobId: string | undefined) =>
    `/careers/${countryToSlug(country)}/jobs/${jobId}`,
  jobApply: (country: string | undefined, jobId: string | undefined) =>
    `/careers/${countryToSlug(country)}/jobs/${jobId}/apply`,
};
