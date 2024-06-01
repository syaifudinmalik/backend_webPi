import mongoose from "mongoose";

const marbotMasjid = mongoose.Schema({
    KECAMATAN:{
        type:String,
        require:true
    },
    KELURAHAN:{
        type:String,
        require:true
    },
    NAMA_TEMPAT_IBADAH:{
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
    NAMA_PETUGAS:{
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

export default mongoose.model('marbot_masjids',marbotMasjid)