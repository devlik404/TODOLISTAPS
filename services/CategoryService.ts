import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CategoryService {
  async find(req:Request,loginSession?: any): Promise<any> {
    try {
      const category = await prisma.todo_category.findMany({
        where:{
            authorId:loginSession.user.id
        }
      });
     
      return category.map((element) => ({
        id: element.id,
        name_category: element.name_category
      }));
    } catch (err) {
      console.log(err);
    }
  }
  async create(req: Request, res: Response) {
    console.log(req);
    try {
      const { name_category } = req.body;

      const loginSession = res.locals.loginSession;
      const usersess = loginSession.user.id;
      const post = await prisma.todo_category.create({
        data: {
          name_category,
          authorId: usersess,
        },
      });

      res.json(post);
    } catch (error) {
      console.log(error);
      return res.status(500).json("terjadi kesalahan");
    }
  }
}
export default new CategoryService();
