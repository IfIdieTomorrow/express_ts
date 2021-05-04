import express, { Router } from "express";

import { BodyProps } from "../../../types";

const adminRouter = Router();

adminRouter.get("/", (req: express.Request, res: express.Response) => {
  console.log(req.body);
});

adminRouter.post("/metadata", (req: express.Request, res: express.Response) => {
  const body: BodyProps = req.body;
  console.log(body);
  if (!body) return res.status(400).json({ success: false });
  return res.status(200).json({ success: true });
});

export default adminRouter;
