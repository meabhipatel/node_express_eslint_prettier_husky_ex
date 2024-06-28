import { RequestHandler } from "express";

export const loginHandler: RequestHandler = (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Welcode to the auth route." });
};
