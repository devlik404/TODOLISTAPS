import { Request, Response } from "express";
import TodoItemService from "../services/ToDoItemService";

class TodoItemController {
  async find(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;
      const response = await TodoItemService.find(req, loginSession);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }
  async create(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;
      const response = await TodoItemService.create(req.body, loginSession);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: "wrong something server hahah:" });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;
      const response = await TodoItemService.delete(req, loginSession);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  async update(req: Request, res: Response) {
    try {
      const todoItemId = req.params.id;
      const loginSession = res.locals.loginSession;

      const response = await TodoItemService.update(
        todoItemId,
        req.body,
        loginSession
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "wrong something server :" });
    }
  }
}
export default new TodoItemController();
