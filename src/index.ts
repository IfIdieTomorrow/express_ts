import express from "express";

import apiRouter from "./router/v1";

const PORT_NUMBER: number = 4000;

class App {
  public application: express.Application;
  constructor() {
    this.application = express();
  }
}

const app = new App().application;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req.params);
  return res.send("start");
});

app.use("/api/v1", apiRouter);

app.listen(PORT_NUMBER, () => console.log(`${PORT_NUMBER}port server is running`));
