import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class TodoItemService {
  async find(req: Request, loginSession?: any): Promise<any> {
    try {
      const item = await prisma.todo_item.findMany({
        where: {
          authorId: loginSession.user.id,
        },
      });

      // Ambil semua category_id dari todo_item
      const categoryIds = item.map((element) => element.category_id);

      // Ambil data kategori berdasarkan category_id
      const categories = await prisma.todo_category.findMany({
        where: {
          id: {
            in: categoryIds,
          },
        },
      });

      return item.map((element) => ({
        id: element.id,
        title: element.title,
        status: element.status,
        category_id: element.category_id,
        category: categories.find((cat) => cat.id === element.category_id),
      }));
    } catch (err) {
      console.log(err);
    }
  }
  async create(reqBody: any, loginSession: any): Promise<any> {
    try {
      const status = reqBody.status === true;
      const Item = await prisma.todo_item.create({
        data: {
          title: reqBody.title,
          status: status,
          authorId: loginSession.user.id,
          category_id: reqBody.category_id,
        },
      });

      return {
        message: "todo item ready",
        Item: Item,
      };
    } catch (error) {
      throw new Error("An error create the server ");
    }
  }
  async delete(req: any, loginSession: any): Promise<any> {
    try {
      const { itemIds } = req.body;
      const itemsToDelete = await prisma.todo_item.findMany({
        where: {
          id: {
            in: itemIds,
          },
          authorId: loginSession.user.id,
        },
      });

      if (!itemsToDelete || itemsToDelete.length === 0) {
        throw new Error("Items not found or unauthorized");
      }

      const itemIdsToDelete = itemsToDelete.map((item) => item.id);

      const deleteitems = await prisma.todo_item.deleteMany({
        where: {
          id: {
            in: itemIdsToDelete,
          },
        },
      });

      return {
        message: "item delete Succses",
        item: deleteitems,
      };
    } catch (err) {
      throw new Error("An error the server");
    }
  }

  async update(todoItemId: any, reqBody: any, loginSession: any): Promise<any> {
    try {
      const existingItem = await prisma.todo_item.findUnique({
        where: {
          id: todoItemId,
          authorId: loginSession.user.id,
        },
      });

      if (!existingItem) {
        throw new Error("Todo item not found");
      }

      const status = existingItem.status === true ? false : true;

      const updatedItem = await prisma.todo_item.update({
        where: {
          id: todoItemId,
        },
        data: {
          title: reqBody.title || existingItem.title,
          status: status,
          category_id: reqBody.category_id || existingItem.category_id,
        },
      });

      return {
        message: "Todo item updated",
        updatedItem: updatedItem,
      };
    } catch (error) {
      throw new Error("An error occurred while updating the todo item");
    }
  }
}
export default new TodoItemService();
