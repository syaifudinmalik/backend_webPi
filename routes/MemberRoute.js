import express from "express";
import {
  getMembersJmtPria,
  getJmtPriabyId,
  getUserbyId,
  getMembersGuruK,
  getMembersMbtMasjid,
  getMembersMdnPerempuan,
  getMembersTmrMasjid,
  getMbtMasjidbyId,
  getGuruKbyId,
  getMdnPerempuanbyId,
  getTmrMasjidbyId,
  saveMemberTahlilPria,
  saveMemberGuruK,
  saveMemberMbtMasjid,
  saveMemberMdnPerempuan,
  saveMemberTmrMasjid,
  updateJmtPria,
  updateGuruK,
  updateMbtMasjid,
  updateMdnPerempuan,
  updateTmrMasjid,
  deleteJmtPria,
  deleteGuruK,
  deleteMbtMasjid,
  deleteMdnPerempuan,
  deleteTmrMasjid,
  getRekap,
  getMembersJmtWanita,
  getJmtWanitabyId,
  saveMemberTahlilWanita,
  updateJmtWanita,
  deleteJmtWanita,
  downloadJmtPria,
  downloadJmtWanita,
  downloadGuruK,
  downloadMbtMasjid,
  downloadMdnPerempuan,
  downloadTmrMasjid,
  findIdJmtPriaAndUpdate,
  findIdJmtWanitaAndUpdate,
  findIdMdnPerempuanAndUpdate,
  findIdGuruKAndUpdate,
  findIdMbtMasjidAndUpdate,
  findIdTmrMasjidAndUpdate,
  deleteManyJmtPria,
  deleteManyJmtWanita,
  deleteManyguruK,
  deleteManyMbtMasjid,
  deleteManyMdnPerempuan,
  deleteManyTmrMasjid,
} from "../controllers/MemberController.js";

const router = express.Router();

// route jmtPria
router.get("/members/jmtPria", getMembersJmtPria);
router.get("/members/jmtWanita", getMembersJmtWanita);
router.get("/members/guruKeagamaan", getMembersGuruK);
router.get("/members/marbotMasjid", getMembersMbtMasjid);
router.get("/members/mudinPerempuan", getMembersMdnPerempuan);
router.get("/members/takmirMasjid", getMembersTmrMasjid);

router.get("/members/dashboard/:id", getUserbyId);
router.get("/members/rekap", getRekap);

router.get("/members/jmtPria/:id", getJmtPriabyId);
router.get("/members/jmtWanita/:id", getJmtWanitabyId);
router.get("/members/marbotMasjid/:id", getMbtMasjidbyId);
router.get("/members/guruKeagamaan/:id", getGuruKbyId);
router.get("/members/mudinPerempuan/:id", getMdnPerempuanbyId);
router.get("/members/takmirMasjid/:id", getTmrMasjidbyId);

router.post("/members/saveTahlilPria", saveMemberTahlilPria);
router.post("/members/saveTahlilWanita", saveMemberTahlilWanita);
router.post("/members/saveGuruKeagamaan", saveMemberGuruK);
router.post("/members/saveMarbotMasjid", saveMemberMbtMasjid);
router.post("/members/saveMudinPerempuan", saveMemberMdnPerempuan);
router.post("/members/saveTakmirMasjid", saveMemberTmrMasjid);


router.patch("/members/jmtPria/edit/:id", updateJmtPria);
router.patch("/members/jmtWanita/edit/:id", updateJmtWanita);
router.patch("/members/guruKeagamaan/edit/:id", updateGuruK);
router.patch("/members/marbotMasjid/edit/:id", updateMbtMasjid);
router.patch("/members/mudinPerempuan/edit/:id", updateMdnPerempuan);
router.patch("/members/takmirMasjid/edit/:id", updateTmrMasjid);

router.put("/members/jmtPria/editMany", findIdJmtPriaAndUpdate);
router.put("/members/jmtWanita/editMany", findIdJmtWanitaAndUpdate);
router.put("/members/guruKeagamaan/editMany", findIdGuruKAndUpdate);
router.put("/members/marbotMasjid/editMany", findIdMbtMasjidAndUpdate);
router.put("/members/mudinPerempuan/editMany", findIdMdnPerempuanAndUpdate);
router.put("/members/takmirMasjid/editMany", findIdTmrMasjidAndUpdate);

router.delete("/members/jmtPria/delete/:id", deleteJmtPria);
router.delete("/members/jmtWanita/delete/:id", deleteJmtWanita);
router.delete("/members/guruKeagamaan/delete/:id", deleteGuruK);
router.delete("/members/marbotMasjid/delete/:id", deleteMbtMasjid);
router.delete("/members/mudinPerempuan/delete/:id", deleteMdnPerempuan);
router.delete("/members/takmirMasjid/delete/:id", deleteTmrMasjid);

router.delete("/members/jmtPria/deleteMany", deleteManyJmtPria);
router.delete("/members/jmtWanita/deleteMany", deleteManyJmtWanita);
router.delete("/members/guruKeagamaan/deleteMany", deleteManyguruK);
router.delete("/members/marbotMasjid/deleteMany", deleteManyMbtMasjid);
router.delete("/members/mudinPerempuan/deleteMany", deleteManyMdnPerempuan);
router.delete("/members/takmirMasjid/deleteMany", deleteManyTmrMasjid);

router.post("/members/jmtPria/download", downloadJmtPria);
router.post("/members/jmtWanita/download", downloadJmtWanita);
router.post("/members/guruKeagamaan/download", downloadGuruK);
router.post("/members/marbotMasjid/download", downloadMbtMasjid);
router.post("/members/mudinPerempuan/download", downloadMdnPerempuan);
router.post("/members/takmirMasjid/download", downloadTmrMasjid);


export default router;
