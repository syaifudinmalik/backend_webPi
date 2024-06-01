import mongoose from "mongoose";

const jmt_pria = mongoose.Schema({
    KECAMATAN:{
        type:String,
        require:true
    },
    DESA:{
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
    NAMA_JAMAAH:{
        type:String,
        require:true
    },
    JUMLAH_ANGGOTA:{
        type: Number,
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

export default mongoose.model('jmt_prias',jmt_pria)