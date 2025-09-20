const { users } = require("../models/userModel");

function getAllUser() {
  return users;
}

function getUser(id) {
  const user = users.find((u) => u.id === id);
  return user;
}

function createUser(newUser) {
  users.push(newUser);
  return newUser;
}

function updateUser(id, newData) {
  let user = users.find((u) => u.id === id);
  if (!user) return null;
  Object.assign(user, newData);
  return user;
}
function deleteUser(id) {
  let user = users.findIndex((u) => u.id === id);
  if (!user) return null;
  return users.splice(user, 1)[0];
}

module.exports = { getAllUser, getUser, createUser, updateUser, deleteUser };
