import {Router} from "express";
import { register, login,logout, findall, profile } from "../Controller/controller.usuario.js";
import {authRequered} from "../Middlewares/validateToken.js"
const router = Router();

router.post("/register", register);
router.get("/usuarios", findall);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile",authRequered, profile);


export default router;