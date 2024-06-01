import passport from 'passport'
import GoogleStrategy from 'passport-google-oauth20'
import User from '../models/UserModel.js';
import dotenv from "dotenv";
dotenv.config();

passport.serializeUser((user,done) => {
    done(null, user.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id).then(user =>{
        done(null,user)
    })
})

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/login/google'
},(accessToken,refreshToken,profile,done)=>{
    User.findOne({googleId:profile.id}).then(existingUser => {
        if(existingUser){
            done(null,existingUser)
        }else{
            new User({
                googleId:profile.id,
                name:profile.displaName,
                email: profile.emails[0].value
            }).save().then(user=>{
                done(null,user)
            })
        }
    })
}))
