import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Adding = () => {
    let nav=useNavigate()
    

let [data,setanimal]=useState({name:"",address:"",occupation:"",id:""})
let doma=(e)=>{
    e.preventDefault()
    
   let fa=window.confirm("do you wand to add")
   if(fa){  axios.post('http://localhost:4000/ko',data).then((res)=>{
    nav('/')
}).catch((error)=>{
    console.log(error);
})}
    
  
    }
        
  

    return ( 
        <div className="bg-grey">
           <h1>welcome bro</h1>
           <div className="bg-slate-100 w-[700px] mx-auto text-center h-[700px]">
            <form action="" onSubmit={doma}>
                <div className="pt-[20px] "><label className="me-[50px]" htmlFor="">ENTER YOUR NAME</label>
                <input className="bg-red-200" type="text" required onChange={(e)=>setanimal({...data,name:e.target.value})} />
                </div  >
                <div className="mt-[20px] "><label className="me-[30px]" htmlFor=""> ENTER ANY NUMBER</label>
                <input className="bg-red-200" type="text" required   onChange={e=>setanimal({...data,id:e.target.value})}/>
                </div>
                <div className="mt-[20px] "><label className="me-[30px]" htmlFor=""> ENTER YOUR ADDRESS</label>
                <input className="bg-red-200" type="text" required   onChange={e=>setanimal({...data,address:e.target.value})}/>
                </div>
                <div className="mt-[20px]"><label className="me-[5px]" htmlFor="">ENTER YOUR OCCUPATION</label>
                <input className="bg-red-200" type="text"  required  onChange={e=>setanimal({...data,occupation:e.target.value})}/>
                </div>
                <button className="mt-[23px] px-[20px] py-[10px] bg-slate-600 text-[#FFFFFF]">submit</button>
            </form>
           </div>
        </div>
     );
}
 
export default Adding;