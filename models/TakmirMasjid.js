import mongoose from "mongoose";

const takmirMasjid = mongoose.Schema({
    KECAMATAN:{
        type:String,
        require:true
    },
    KELURAHAN:{
        type:String,
        require:true
    },
    NAMA_MASJID:{
        type:String,
        require:true
    },
    RT:{
        type:String,
        require:true
    },
    RW:{
        type:String,
        require:true
    },
    DUSUN:{
        type:String,
        require:true
    },
    NAMA_KETUA_TAKMIR:{
        type:String,
        require:true
    },
    NIK:{
        type:String,
        require:true
    },
    NO_HP:{
        type:String,
    },
    REK:{
        type:String,
        require:true
    },
})

export default mongoose.model('takmir_masjids',takmirMasjid)