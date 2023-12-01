import { Request, Response } from "express";
import CategoryService from "../services/CategoryService";

class CategoryController{
    async find(req: Request, res: Response) {
        try {
          const loginSession = res.locals.loginSession;
          const response = await CategoryService.find(req,loginSession);
          return res.status(200).json(response);
        } catch (error) {
          return res.status(500).json({ error: error });
        }
      }
      create(req: Request, res: Response) {
        CategoryService.create(req, res);
      }
   
}
export default new CategoryController();