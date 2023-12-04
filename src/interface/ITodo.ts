export interface ITodo {
  id: string;
  name_category: string;
}
export interface ITodoItem {
  id: string;
  title: string;
  status: boolean;
  category_id: string;
  category: ITodo;
}
export interface IPostTodoItem {
  title: string;
  category_id: string;
}

export interface IPostTodoCat {
  name_category: string;
}
