import {Router} from "express";
import { register, login, findall } from "../Controller/controller.usuario.js";

const router = Router();

router.post("/register", register);
router.get("/usuarios", findall);
router.post("/login", login);


export default router;