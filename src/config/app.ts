import express from "express";

class Application {
  private application: express.Application;
  constructor() {
    this.application = express();
  }
  getApplication() {
    return this.application;
  }
}

const App = new Application();

export default App;
