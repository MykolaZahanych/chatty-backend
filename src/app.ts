import express, { Express } from "express";
import { ChattyServer } from "./setupServer";
import databeseConnection from './setupDatabase';

class Application {
  public initialize(): void {
    databeseConnection();
    const app: Express = express();
    const server: ChattyServer = new ChattyServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
