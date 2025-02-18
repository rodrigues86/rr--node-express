import { Router } from "express";
import TopicController from "./topic.controller";

const TopicRouter = Router();
TopicRouter.post("/topics", TopicController.create);
TopicRouter.put("/topics/:id", TopicController.update);
TopicRouter.get("/topics", TopicController.getAll);
TopicRouter.get("/topics/:id", TopicController.getById);

export default TopicRouter;
