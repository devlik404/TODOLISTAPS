import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ApiData } from "../hooks/api";
import { IPostTodoCat, ITodo } from "../interface/ITodo";
import { useNavigate } from "react-router-dom";





export function UseCategory() {
    const [category, setCategory] = useState<ITodo[]>([]);
    const [catItem,setCatItem] = useState<IPostTodoCat>({
      name_category:""
    });
 
    async function getCategory() {
        try {
            const response = await ApiData.get("/category", {
                headers: {
                  Authorization: `
                    Bearer ${localStorage.token}`,
                },
              });
          setCategory(response.data)
      
        } catch (error) {
          console.log("error category",error)
        }
      }
  useEffect(() => {
    getCategory();
  }, []);

  function handleChange(event:ChangeEvent<HTMLInputElement>){
    const{name,value} = event.target;
    setCatItem({
      ...catItem,
      [name]:value,
    });
  }


  const navigate = useNavigate()

const postTodoCat= async (e:FormEvent) =>{
    e.preventDefault()
    try {
      await ApiData.post("/addCategory",catItem, {
        headers: {
          Authorization: `
            Bearer ${localStorage.token}`,
        },
      });
      
        navigate("/")
    } catch (error) {
      console.log(error)
      console.log("gagal menambahkan item",error)
    }
  }


  return {category,postTodoCat,handleChange};
}
