import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ApiData } from "../hooks/api";
import { IPostTodoItem, ITodoItem } from "../interface/ITodo";

export function UseTodoItem() {
  const [listTodo, setListTodo] = useState<ITodoItem[]>([]);

  const [item, setitem] = useState<IPostTodoItem>({
    title: "",
    category_id: "",
  });

  // get item todo
  async function getListTodo() {
    try {
      const response = await ApiData.get("/item", {
        headers: {
          Authorization: `
                    Bearer ${localStorage.token}`,
        },
      });
      setListTodo(response.data);
    } catch (error) {
      console.log("error listTodo", error);
    }
  }

  // creat todo item
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setitem({
      ...item,
      [name]: value,
    });
  }

 
  const postTodoItem = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await ApiData.post("/addItem", item, {
        headers: {
          Authorization: `
                Bearer ${localStorage.token}`,
        },
      });
      
      // Update state
      setListTodo(response.data);
    } catch (error) {
      console.log(error);
      console.log("gagal menambahkan item", error);
    }
  };

  // update status item
  const handleCheckboxChange = async (id: string) => {
    try {
      await ApiData.patch(`/update/${id}`, null, {
        headers: {
          Authorization: `
                Bearer ${localStorage.token}`,
        },
      });
      // Handle successful response, update state
      setListTodo((prevList) =>
        prevList.map((todo) =>
          todo.id === id ? { ...todo, status: !todo.status } : todo
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  // delete Todo Item
  const handleDelete = async (itemIdsToDelete: string[]) => {
    try {
      const response = await ApiData.delete("/item", {
        headers: {
          Authorization: `
                Bearer ${localStorage.token}`,
        },
        data: {
          itemIds: itemIdsToDelete,
        },
      });

      // memperbarui state
      const updatedList = listTodo.filter(
        (item) => !itemIdsToDelete.includes(item.id)
      );

      // Update state
      setListTodo(updatedList);
      console.log(response, "response");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListTodo();
  }, []);

  return {
    listTodo,
    postTodoItem,
    handleChange,
    handleCheckboxChange,
    handleDelete,
  };
}
