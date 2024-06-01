import mongoose from "mongoose";

const rekap = mongoose.Schema({
    KECAMATAN:{
        type:String,
        require:true
    },
    NAMA_DESA:{
        type:String,
        require:true
    },
    JML_PER_DESA:{
        type:Number,
        require:true
    },
    MASJID:{
        type:Number,
        require:true
    },
    KET:{
        type:String,
        require:true
    }
})

export default mongoose.model('rekap_marbots',rekap)