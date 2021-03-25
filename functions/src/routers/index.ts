import { Application } from "express";
import { getUserById } from '../controllers/user.controller';

export default function initRoutes(app: Application) {
  //user enpoint
  app.get('/user', getUserById);
}