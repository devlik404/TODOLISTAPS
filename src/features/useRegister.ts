import { useState, ChangeEvent, FormEvent} from "react";
import { ApiData } from "../hooks/api";
import { IREgister } from "../interface/IRegister";
import { useNavigate } from "react-router-dom";



export function useRegister (){
//validation register
  const [Validate,setValidate] = useState<IREgister>({
    name:"",
    phone:"",
    email:"",
    user_name:"",
    password:""
})

    const  changeHandlerValidate = (event:ChangeEvent<HTMLInputElement>)=>{
      const { name, value } = event.target;
      setValidate({
            ...Validate,
            [name]:value
        })
    }
    const navigate = useNavigate()
    const handleSubmit = async (e:FormEvent) =>{
      e.preventDefault()
      try {
         await ApiData.post("/register",Validate)
          navigate("/login")
      } catch (error) {
          console.log("error submit data",error)
      }
  }
 return{changeHandlerValidate,handleSubmit}
}