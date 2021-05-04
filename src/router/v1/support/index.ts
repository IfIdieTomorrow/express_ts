import express, { Router } from "express";

import { categorySection } from "../../../utils";

const supportRouter = Router();

supportRouter.get("/category", (req: express.Request, res: express.Response) => {
  return res.status(200).json({ data: categorySection });
});

export default supportRouter;
