import { Router } from "express";

import adminRouter from "./admin";
import supportRouter from "./support";

const apiRouter = Router();

apiRouter.use("/admin", adminRouter);
apiRouter.use("/support", supportRouter);

export default apiRouter;
