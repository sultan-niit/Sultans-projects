export const normalizeAuthUser = (rawUser = {}) => {
  const payload = rawUser && typeof rawUser === "object" ? rawUser : {};
  const user = payload.staff || payload.user || payload.data?.staff || payload.data?.user || payload.data || payload;
  const firstName = user.firstName || user.first_name || user.staffFirstName || user.staff_first_name || "";
  const lastName = user.lastName || user.last_name || user.staffLastName || user.staff_last_name || "";
  const name = [
    user.name,
    user.fullName,
    user.full_name,
    user.staffName,
    user.staff_name,
    user.staff_full_name,
    user.displayName,
    `${firstName} ${lastName}`,
  ].find((value) => typeof value === "string" && value.trim() && !value.includes("@"));

  return {
    ...user,
    fullName: name?.trim() || user.emailAddress || user.email || "User",
  };
};