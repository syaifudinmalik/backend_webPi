import mongoose from "mongoose";

const guruk = mongoose.Schema({
    KECAMATAN:{
        type:String,
        require:true
    },
    KELURAHAN:{
        type:String,
        require:true
    },
    DUSUN:{
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
    NAMA_LEMBAGA:{
        type:String,
        require:true
    },
    NAMA_KETUA:{
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

export default mongoose.model('guru_keagamaans',guruk)