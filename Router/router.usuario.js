import {Router} from "express";
import { register, login,logout, findall } from "../Controller/controller.usuario.js";

const router = Router();

router.post("/register", register);
router.get("/usuarios", findall);
router.post("/login", login);
router.post("/logout", logout);


export default router;