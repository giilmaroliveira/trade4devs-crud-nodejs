import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

class App {
  public app: express.Application;

  public constructor() {
    this.app = express();
    this.app.use(cors());

    this.initMongoose();
    this.connectDatabase();
  }

  private initMongoose(): void {
    mongoose.set('runValidators', true);
  }

  private connectDatabase(): void {
    mongoose.connect(
      `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@${process.env.MONGO_DB_CLUSTER}/crud-nodejs?retryWrites=true&w=majority`);
  }

  public listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Application is running on port ${port}`);
    })
  }
}

export default App;