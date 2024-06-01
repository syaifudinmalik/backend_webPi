import mongoose from "mongoose";

const User = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    picture:{
        type:String,
        require:true
    },
    tanggalLahir:{
        type: Date
    },
    alamat:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
})

export default mongoose.model('Users',User)