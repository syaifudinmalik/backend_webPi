import express from "express";
import {
  getUsers,
  getUserbyId,
  saveUser,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
  lupaPassword,
  resetPassword,
  exportCsv,
  exportExcel,
  searchName,
  logoutUser,
} from "../controllers/UserController.js";
import passport from "passport";

const router = express.Router();

// create and read
router.get("/users", getUsers);
router.get("/users/:id", getUserbyId);
router.post("/users", saveUser);
router.post("/users/register", registerUser);
router.post("/users/login", loginUser);
router.post("/users/logout", logoutUser);
router.post("/users/lupaPassword", lupaPassword);
router.post("/users/reset-password/:token", resetPassword);
router.post("/users/export-csv", exportCsv);
router.post("/users/export-excel", exportExcel);
router.post("/users/search", searchName);
// update and delete
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
