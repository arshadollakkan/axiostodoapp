import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



const Edit = () => {
    let [state,setstate]=useState([])
    let {id}=useParams()
    let nav=useNavigate()
    useEffect(()=>{
         axios.get('http://localhost:4000/ko/'+id).then((res)=>{
            setstate(res.data)
         }).catch((error)=>{
            console.log(error);
         })
    },[])
    let kol=(e)=>{
        e.preventDefault()
        axios.put('http://localhost:4000/ko/'+id,state).then((res)=>{
            let confirm=window.confirm("are you done ok")
            if(confirm){
               nav('/')
            }
        }).catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div>
             <h1  className="text-center">welcome bro</h1>
           <div className="bg-slate-100 w-[700px] mx-auto text-center h-[700px]">
            <form action="" onSubmit={kol}>
                <div className="pt-[20px] "><label className="me-[50px]" htmlFor="">ENTER YOUR NAME</label>
                <input className="bg-red-200" type="text" required  value={state.name} onChange={e=>setstate({...state,name:e.target.value})}/>
                </div  >
                <div className="mt-[20px] "><label className="me-[30px]" htmlFor=""> ENTER ANY NUMBER</label>
                <input className="bg-red-200" type="text" required     value={state.id}  onChange={e=>setstate({...state,id:e.target.value})}      />    </div>
                <div className="mt-[20px] "><label className="me-[30px]" htmlFor=""> ENTER YOUR ADDRESS</label>
                <input className="bg-red-200" type="text" required   value={state.address}  onChange={e=>setstate({...state,address:e.target.value})}/>
                </div>
                <div className="mt-[20px]"><label className="me-[5px]" htmlFor="">ENTER YOUR OCCUPATION</label>
                <input className="bg-red-200" type="text"  required value={state.occupation} onChange={e=>setstate({...state,occupation:e.target.value})}/>
                </div>
                <button className="mt-[23px] px-[20px] py-[10px] bg-slate-600 text-[#FFFFFF]">update</button>
            </form>
           </div>
        </div>
    );
}
 
export default Edit;