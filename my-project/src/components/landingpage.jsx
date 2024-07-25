import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Landing = () => {

    let[data,setdata]=useState([])
    let[keys,setkeys]=useState([])
    let nav=useNavigate()
    let asd=()=>{
        let confirm=window.confirm("would you like to change the page")
        if(confirm){
            nav('/adding')
        }
    }

     useEffect(()=>{
         axios.get('http://localhost:4000/ko').then((res)=>{
            setkeys(Object.keys(res.data[2]))
            setdata(res.data)
         }).catch((error)=>{console.log(error);})
     },[data])
     let fo=(id)=>{
        nav(`/editing/${id}`)
     }
     let gl=(id)=>{
        axios.delete('http://localhost:4000/ko/'+id).then((res)=>{
            alert("deleted")
            nav('/')
        }).catch((error)=>{
            console.log(error);
        })
     }
    return ( 
        <div className=" bg-slate-600 h-[1000px] mx-auto pt-[45px]">

            <button className="px-3 py-3 bg-red-400 font-bold rounded-lg ms-[34px]" onClick={asd}>add items</button>

    <table className="mx-auto border-collapse border border-slate-400 bg-green-400 w-[600px] ">
        <thead className="">
            <tr >
                {
                    keys.map((x,i)=>(
                        <th className="border border-slate-400" key={i}>{x}</th>
                    ))
                }
                <th className="border border-slate-400">ACtion</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((x,i)=>(
                    <tr className="h-[60px]" key={i}>
                        <td  className="border border-slate-400  text-center">{x.id}</td>
                   <td  className="border border-slate-400 text-center">{x.name}</td>
                   <td  className="border border-slate-400 text-center">{x.address}</td>
                   <td  className="border border-slate-400 text-center">{x.occupation}</td>
                   <button  className="py-[10px] px-[60px] border border-slate-400 h-[60px] hover:bg-yellow-400  "  onClick={()=>fo(x.id)} >Edit</button>
                   <button className="py-[10px] px-5 border border-slate-400 h-[60px]  hover:bg-red-500 " onClick={()=>gl(x.id)}>DELETE </button>
                    </tr>
                ))
            }
        </tbody>
    </table>


        </div>
     );
}
 
export default Landing;