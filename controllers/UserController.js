import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import bp from "body-parser";
import fileDownload from "js-file-download";
import excel from "exceljs";
import { parse as csv } from "json2csv";
import passport from "passport";
import fs from "fs";
dotenv.config();

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({})
      .collation({ locale: "en" })
      .sort({ username: 1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserbyId = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const inserteduser = await user.save();
    res.status(201).json(inserteduser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updateduser = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updateduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const deleteduser = await User.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User already existed" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.json({ message: "email atau password invalid" });
    }
    const token = jwt.sign({ username: user.username }, process.env.KEY, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
    return res.json({ status: true, message: "login successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const registerUser = async (req, res) => {
  const { username, email, gender, alamat, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ message: "User already existed" });
    }
    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      gender,
      alamat,
      password: hashpassword,
    });

    await newUser.save();
    return res.json({ status: true, message: "registered successful" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const lupaPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Email tidak terdaftar" });
    }
    const token = jwt.sign({ id: user._id }, process.env.KEY, {
      expiresIn: "5m",
    });
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "batmanknight439@gmail.com",
        pass: "kroyvcsalikupdgg",
      },
    });

    var mailOptions = {
      from: "batmanknight439@gmail.com",
      to: email,
      subject: "Reset Password",
      text: `http://localhost:5173/reset-password/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.json({ message: "error sending email" });
      } else {
        return res.json({ status: true, message: "email sent" });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const decode = await jwt.verify(token, process.env.KEY);
    const id = decode.id;
    const hashpassword = await bcrypt.hash(password, 10);
    await User.findByIdAndUpdate({ _id: id }, { password: hashpassword });
    return res.json({ status: true, message: "updated password" });
  } catch (error) {
    return res.json("invalid token");
  }
};

export const exportExcel = async (req, res) => {
  const { selectedUserIds } = req.body;
  try {
    const selectedUsers = await User.find({ _id: { $in: selectedUserIds } });
    // res.json(selectedUsers)
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet("SelectedUsers");
    worksheet.columns = [
      { header: "Username", key: "username", width: 20 },
      { header: "Email", key: "email", width: 20 },
      { header: "Gender", key: "gender", width: 10 },
      { header: "Alamat", key: "alamat", width: 50 },
      { header: "Password", key: "password", width: 50 },
    ];
    selectedUsers.forEach((user) => {
      worksheet.addRow(user);
    });
    const filePath = "selectedUsers.xlsx";
    await workbook.xlsx.writeFile(`./downloads/${filePath}`);

    // fileDownload(data,filePath)
    res.download(filePath);
    res.json(selectedUsers);
  } catch (error) {
    res.status(500).send("Error exporting data");
    console.log(err);
  }
};
export const exportCsv = async (req, res) => {
  const { selectedUserIds } = req.body;

  try {
    const selectedUsers = await User.find({ _id: { $in: selectedUserIds } });

    const csvData = csv(selectedUsers, {
      fields: ["username", "email", "gender", "alamat", "password"],
    });
    fs.writeFileSync("./downloads/selectedUsers.csv", csvData);

    res.download("selectedUsers.csv");
    res.json(selectedUsers);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error exporting data");
  }
};

export const searchName = async (req, res) => {
  const { inputSearch } = req.body;
  try {
    const username = await User.find({ username: inputSearch });
    res.json(username);
  } catch (error) {
    res.status(500).send("no username");
  }
};
export const logoutUser = async (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.session.destroy()
    res.redirect("/about");
    return res.json({ status: false, message: "logout Succesfully" });
  }); // Redirect ke halaman utama atau halaman login setelah logout
};
