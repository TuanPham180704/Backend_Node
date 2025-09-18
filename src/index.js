require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

let users = [
  { id: 1, name: "Tuan" },
  { id: 2, name: "Lan" },
  { id: 3, name: "Anh" },
  { id: 4, name: "Giang" },
];

app.use(express.json());

// Route test
app.get("/", (req, res) => {
  res.send("Hello Express 🚀");
});

app.get("/users", (req, res) => res.json(users));
app.get("/users/:id", (req, res) => {
  const user = users.filter((u) => u.id == req.params.id);
  user ? res.json(user) : res.status(404).json({ msg: "User not found" });
});
app.post("/users", (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});
app.put("/users/:id", (req, res) => {
  let user = users.find((u) => u.id == req.params.id);
  if (!user) return res.status(404).json({ msg: "User not found" });
  user.name = req.body.name || user.name;
  res.json(user);
});
app.delete("/users/:id", (req, res) => {
  const user = users.filter((u) => u.id != req.params.id);
  res.json({ msg: "Delete Success" });
});
app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});
