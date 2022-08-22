import { Application } from "express";
import { getUserById } from '../controllers/user.controller';
import UsageController from '../controllers/usage.controller'

export default function initRoutes(app: Application) {
  //user enpoint
  app.get('/user', getUserById);

  // test API local
  app.get('/usage', UsageController.getUsage)
  app.post('/usage', UsageController.addUsage)
}