import mongoose from "mongoose";

const mudinPerempuan = mongoose.Schema({
    KECAMATAN:{
        type:String,
        require:true
    },
    KELURAHAN:{
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
    NAMA:{
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

export default mongoose.model('mudin_perempuans',mudinPerempuan)