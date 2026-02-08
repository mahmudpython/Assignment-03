const users = [
  { id: 1, name: "Rahim", role: "admin" },
  { id: 2, name: "Karim", role: "user" }
];

const admins = users.filter(u => u.role === "admin");
