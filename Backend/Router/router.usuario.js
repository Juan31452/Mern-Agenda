import {Router} from "express";
import { register, login,logout, findall, profile } from "../Controller/controller.usuario.js";
import {authRequered} from "../Middlewarez/validateToken.js"
import { validateSchema } from "../Middlewarez/validate.middlewarez.js";
import { loginSchema, registerSchema } from "../Schemas/auth.schemas.js";
const router = Router();

router.post("/register",validateSchema(registerSchema), register);
router.get("/usuarios", findall);
router.post("/login",validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/profile",authRequered, profile);


export default router;