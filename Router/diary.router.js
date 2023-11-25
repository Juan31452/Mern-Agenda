import {Router} from 'express';
import {authRequered} from '../Middlewarez/validateToken.js';
import {
  getDiarys,
  createDiary,
  getDiary,
  updateDiary,
  deleteDiary,
} from "../Controller/diary.controller.js";

const router = Router();

router.get("/diary",authRequered,getDiarys);
router.get("/diary/:id",authRequered,getDiary);
router.post("/diary",authRequered,createDiary);
router.delete("/diary/:id",authRequered,deleteDiary);
router.put("/diary/:id",authRequered,updateDiary);


export default router;