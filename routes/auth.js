import express from "express";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import User from "../models/UserModel.js";
// var GoogleStrategy = require('passport-google-oauth20').Strategy;
const router = express.Router();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "http://localhost:3000/oauth/login/google",
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    (accessToken, refreshToken, profile, done) => {
      const email = profile.emails.map((email) => email.value);
      const pictures = profile.photos.map((picture) => picture.value);
      User.findOne({ email }).then((existingEmail) => {
        if (existingEmail) {
          done(null, existingEmail);
          console.log("User Existed");
          console.log(profile);
        } else {
          console.log("User Added succesfully..");
          new User({
            username: profile.displayName,
            email: String(email),
            gender: profile.gender,
            alamat: profile.placesLived,
            tanggalLahir: profile.birthday,
            picture: String(pictures),
          })
            .save()
            .then((user) => {
              done(null, user);
              console.log(user);
            });
        }
      });
    }
  )
);

router.get(
  "/oauth/login",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Callback dari Google setelah login berhasil
router.get(
  "/oauth/login/google",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    if (req.user) {
      res.redirect(`http://localhost:5173/dashboard/${req.user._id}`);
      res.json(req.user) // Redirect ke halaman dashboard setelah login berhasil
    }
    res.redirect(`http://localhost:5173/dashboard/`); // Redirect ke halaman dashboard setelah login berhasil

  }
);
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); // Lanjutkan ke rute berikutnya jika pengguna diotentikasi
  } // Redirect pengguna ke halaman login jika tidak diotentikasi
};
router.get("/account", ensureAuthenticated, async (req, res, next) => {
  try {
    const { id, username, email } = req.user;
    const userLogin = await User.findOne({ email: String(email) });
    console.log(email);
    res.json(userLogin);
  } catch (error) {
    next(error);
  }
});

// Rute untuk logout
router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  const cookies = req.cookies;

  // Loop melalui setiap cookie dan menghapusnya satu per satu
  for (const cookieName in cookies) {
    res.clearCookie(cookieName);
  }
    req.session.destroy()
    res.redirect("http://localhost:5173/");
  }); // Redirect ke halaman utama atau halaman login setelah logout
});

export default router;
