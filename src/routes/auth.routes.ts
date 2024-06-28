import { loginHandler } from "@cont/auth.controllers";
import { Router } from "express";

const authRouter = Router();

authRouter.get("/login", loginHandler);

export default authRouter;
