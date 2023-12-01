import * as express from "express";
import {Request,Response} from "express";
import ValidationController from "../controllers/validationController";
import authenticate from "../middleware/authenticate";
import categoryController from "../controllers/categoryController";
import ToDoItemController from "../controllers/ToDoItemController";

const router = express.Router();
router.get("/",(req:Request,res:Response)=>{
    return res.json({ message: 'hello world' });
});

// Authentication users
router.post("/register",ValidationController.register);
router.post("/login",ValidationController.login);
router.get("/check",authenticate,ValidationController.check);

//ToDo Category
router.get("/category",authenticate,categoryController.find);
router.post("/addCategory",authenticate,categoryController.create);

//ToDo Item
router.get("/item",authenticate,ToDoItemController.find);
router.post("/addItem",authenticate,ToDoItemController.create);
router.patch("/update/:id",authenticate,ToDoItemController.update);
router.delete("/item",authenticate,ToDoItemController.delete);


export default router
