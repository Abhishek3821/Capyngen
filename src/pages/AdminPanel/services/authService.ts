const AUTH_KEY = "capyngen_admin_auth";

export const isAdminLoggedIn = (): boolean => {
  return localStorage.getItem(AUTH_KEY) === "true";
};

export const loginAdmin = (email: string, password: string): boolean => {
  // TODO: replace with a real API call to your backend
  if (email.trim() !== "" && password.trim() !== "") {
    localStorage.setItem(AUTH_KEY, "true");
    return true;
  }
  return false;
};

export const logoutAdmin = (): void => {
  localStorage.removeItem(AUTH_KEY);
};
