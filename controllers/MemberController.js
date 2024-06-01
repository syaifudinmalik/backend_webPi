import JmtPria from "../models/JmtPriaModel.js";
import guruK from "../models/GuruKeagamaan.js";
import MbtMasjid from "../models/MarbotMasjidModel.js";
import User from "../models/UserModel.js";
import MdnPerempuan from "../models/MudinPerempuan.js";
import TmrMasjid from "../models/TakmirMasjid.js";
import Rekap from "../models/RekapModel.js";
import JmtWanita from "../models/JmtWanitaModel.js";
// import fiel from '../downloads'
// import selectedUser from '../downloads/'

export const getMembersJmtPria = async (req, res) => {
  try {
    const members = await JmtPria.find({}).sort({ NAMA_KETUA: 1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getMembersJmtWanita = async (req, res) => {
  try {
    const members = await JmtWanita.find({}).sort({ NAMA_KETUA: 1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getMembersGuruK = async (req, res) => {
  try {
    const members = await guruK.find({}).sort({ NAMA_KETUA: 1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getMembersMbtMasjid = async (req, res) => {
  try {
    const members = await MbtMasjid.find({}).sort({ NAMA_PETUGAS: 1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getMembersMdnPerempuan = async (req, res) => {
  try {
    const members = await MdnPerempuan.find({}).sort({ NAMA: 1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getMembersTmrMasjid = async (req, res) => {
  try {
    const members = await TmrMasjid.find({}).sort({ NAMA_KETUA_TAKMIR: 1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getRekap = async (req, res) => {
  try {
    const members = await Rekap.find({}).sort({ KECAMATAN: 1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserbyId = async (req, res) => {
  try {
    const members = await User.findById(req.params.id);
    res.json(members);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getJmtPriabyId = async (req, res) => {
  try {
    const members = await JmtPria.findById(req.params.id);
    res.json(members);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getJmtWanitabyId = async (req, res) => {
  try {
    const members = await JmtWanita.findById(req.params.id);
    res.json(members);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getMbtMasjidbyId = async (req, res) => {
  try {
    const members = await MbtMasjid.findById(req.params.id);
    res.json(members);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getGuruKbyId = async (req, res) => {
  try {
    const members = await guruK.findById(req.params.id);
    res.json(members);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getMdnPerempuanbyId = async (req, res) => {
  try {
    const members = await MdnPerempuan.findById(req.params.id);
    res.json(members);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getTmrMasjidbyId = async (req, res) => {
  try {
    const members = await TmrMasjid.findById(req.params.id);
    res.json(members);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveMemberTahlilPria = async (req, res) => {
  const member = new JmtPria(req.body);
  try {
    const insertedmember = await member.save();
    res.status(201).json({ insertedmember, status: true });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const saveMemberTahlilWanita = async (req, res) => {
  const member = new JmtWanita(req.body);
  try {
    const insertedmember = await member.save();
    res.status(201).json({ insertedmember, status: true });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const saveMemberGuruK = async (req, res) => {
  const member = new guruK(req.body);
  try {
    const insertedmember = await member.save();
    res.status(201).json({ insertedmember, status: true });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const saveMemberMbtMasjid = async (req, res) => {
  const member = new MbtMasjid(req.body);
  try {
    const insertedmember = await member.save();
    res.status(201).json({ insertedmember, status: true });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const saveMemberMdnPerempuan = async (req, res) => {
  const member = new MdnPerempuan(req.body);
  try {
    const insertedmember = await member.save();
    res.status(201).json({ insertedmember, status: true });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const saveMemberTmrMasjid = async (req, res) => {
  const member = new TmrMasjid(req.body);
  try {
    const insertedmember = await member.save();
    res.status(201).json({ insertedmember, status: true });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateJmtPria = async (req, res) => {
  try {
    const updateduser = await JmtPria.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json({ updateduser, status: true });
  } catch (error) {
    res.status(400).json({ message: error.message, status: false });
  }
};
export const updateJmtWanita = async (req, res) => {
  try {
    const updateduser = await JmtWanita.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json({ updateduser, status: true });
  } catch (error) {
    res.status(400).json({ message: error.message, status: false });
  }
};
export const updateGuruK = async (req, res) => {
  try {
    const updateduser = await guruK.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json({ updateduser, status: true });
  } catch (error) {
    res.status(400).json({ message: error.message, status: false });
  }
};
export const updateMbtMasjid = async (req, res) => {
  try {
    const updateduser = await MbtMasjid.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json({ updateduser, status: true });
  } catch (error) {
    res.status(400).json({ message: error.message, status: false });
  }
};
export const updateMdnPerempuan = async (req, res) => {
  try {
    const updateduser = await MdnPerempuan.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json({ updateduser, status: true });
  } catch (error) {
    res.status(400).json({ message: error.message, status: false });
  }
};
export const updateTmrMasjid = async (req, res) => {
  try {
    const updateduser = await TmrMasjid.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json({ updateduser, status: true });
  } catch (error) {
    res.status(400).json({ message: error.message, status: false });
  }
};

export const deleteJmtPria = async (req, res) => {
  try {
    const deleteduser = await JmtPria.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteJmtWanita = async (req, res) => {
  try {
    const deleteduser = await JmtWanita.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteGuruK = async (req, res) => {
  try {
    const deleteduser = await guruK.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteMbtMasjid = async (req, res) => {
  try {
    const deleteduser = await MbtMasjid.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteMdnPerempuan = async (req, res) => {
  try {
    const deleteduser = await MdnPerempuan.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteTmrMasjid = async (req, res) => {
  try {
    const deleteduser = await TmrMasjid.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const downloadJmtPria = async (req, res) => {
  const id = req.body;
  try {
    const data = await JmtPria.find({ _id: { $in: id } });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("error download", error);
  }
};
export const downloadJmtWanita = async (req, res) => {
  const id = req.body;
  try {
    const data = await JmtWanita.find({ _id: { $in: id } });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("error download", error);
  }
};
export const downloadMbtMasjid = async (req, res) => {
  const id = req.body;
  try {
    const data = await MbtMasjid.find({ _id: { $in: id } });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("error download", error);
  }
};
export const downloadMdnPerempuan = async (req, res) => {
  const id = req.body;
  try {
    const data = await MdnPerempuan.find({ _id: { $in: id } });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("error download", error);
  }
};
export const downloadTmrMasjid = async (req, res) => {
  const id = req.body;
  try {
    const data = await TmrMasjid.find({ _id: { $in: id } });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("error download", error);
  }
};
export const downloadGuruK = async (req, res) => {
  const id = req.body;
  try {
    const data = await guruK.find({ _id: { $in: id } });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("error download", error);
  }
};

export const findIdJmtPriaAndUpdate = async (req, res) => {
  const id = req.body;
  try {
    const updatePromises = id.map(async (item) => {
      await JmtPria.findByIdAndUpdate(item._id, item);
    });

    const updatedData = await Promise.all(updatePromises);
    // res.status(200).json({updatedData, status: true});
    res.send({ updatedData, status: true });
  } catch (error) {
    console.log(error);
    res.status(500).send("error updated", error);
  }
};
export const findIdJmtWanitaAndUpdate = async (req, res) => {
  const id = req.body;
  try {
    const updatePromises = id.map(async (item) => {
      await JmtWanita.findByIdAndUpdate(item._id, item);
    });

    const updatedData = await Promise.all(updatePromises);
    // res.status(200).json({updatedData, status: true});
    res.send({ updatedData, status: true });
  } catch (error) {
    console.log(error);
    res.status(500).send("error updated", error);
  }
};
export const findIdTmrMasjidAndUpdate = async (req, res) => {
  const id = req.body;
  try {
    const updatePromises = id.map(async (item) => {
      await TmrMasjid.findByIdAndUpdate(item._id, item);
    });

    const updatedData = await Promise.all(updatePromises);
    // res.status(200).json({updatedData, status: true});
    res.send({ updatedData, status: true });
  } catch (error) {
    console.log(error);
    res.status(500).send("error updated", error);
  }
};
export const findIdMbtMasjidAndUpdate = async (req, res) => {
  const id = req.body;
  try {
    const updatePromises = id.map(async (item) => {
      await MbtMasjid.findByIdAndUpdate(item._id, item);
    });

    const updatedData = await Promise.all(updatePromises);
    // res.status(200).json({updatedData, status: true});
    res.send({ updatedData, status: true });
  } catch (error) {
    console.log(error);
    res.status(500).send("error updated", error);
  }
};
export const findIdMdnPerempuanAndUpdate = async (req, res) => {
  const id = req.body;
  try {
    const updatePromises = id.map(async (item) => {
      await MdnPerempuan.findByIdAndUpdate(item._id, item);
    });

    const updatedData = await Promise.all(updatePromises);
    // res.status(200).json({updatedData, status: true});
    res.send({ updatedData, status: true });
  } catch (error) {
    console.log(error);
    res.status(500).send("error updated", error);
  }
};
export const findIdGuruKAndUpdate = async (req, res) => {
  const id = req.body;
  try {
    const updatePromises = id.map(async (item) => {
      await guruK.findByIdAndUpdate(item._id, item);
    });

    const updatedData = await Promise.all(updatePromises);
    // res.status(200).json({updatedData, status: true});
    res.send({ updatedData, status: true });
  } catch (error) {
    console.log(error);
    res.status(500).send("error updated", error);
  }
};

export const deleteManyJmtPria = async (req, res) => {
  const ids = req.body;
  try {
    // console.log(ids);
    const dataDeleted = await JmtPria.deleteMany({ _id: { $in: ids } });
    res.status(200).json({dataDeleted, 
      message: "Member Deleted",
      status: true
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Error Deleted Member", error);
  }
};
export const deleteManyJmtWanita = async (req, res) => {
  try {
    const ids = req.body;
    const dataDeleted = await JmtWanita.deleteMany({ _id: { $in: ids } });
    res.status(200).json({dataDeleted, 
        message: "Member Deleted",
        status: true
      });
  } catch (error) {
    console.log(error);
    res.status(500).json("Error Deleted Member", error);
  }
};
export const deleteManyMbtMasjid = async (req, res) => {
  try {
    const ids = req.body;
    const dataDeleted = await MbtMasjid.deleteMany({ _id: { $in: ids } });
    res.status(200).json({dataDeleted, 
      message: "Member Deleted",
      status: true
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Error Deleted Member", error);
  }
};
export const deleteManyMdnPerempuan = async (req, res) => {
  try {
    const ids = req.body;
    const dataDeleted = await MdnPerempuan.deleteMany({ _id: { $in: ids } });
    res.status(200).json({dataDeleted, 
      message: "Member Deleted",
      status: true
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Error Deleted Member", error);
  }
};
export const deleteManyTmrMasjid = async (req, res) => {
  try {
    const ids = req.body;
    const dataDeleted = await TmrMasjid.deleteMany({ _id: { $in: ids } });
    res.status(200).json({dataDeleted, 
      message: "Member Deleted",
      status: true
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Error Deleted Member", error);
  }
};
export const deleteManyguruK = async (req, res) => {
  try {
    const ids = req.body;
    const dataDeleted = await guruK.deleteMany({ _id: { $in: ids } });
    res.status(200).json({dataDeleted, 
      message: "Member Deleted",
      status: true
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Error Deleted Member", error);
  }
};
