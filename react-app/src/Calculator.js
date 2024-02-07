import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Calculator() {
 const [search,setSearch]=useState('')
 const[menuBar,setMenuBar]=useState(false)
 const[data,setData]=useState({
        name:'',
        password:''
 });
 const[form,setForm]=useState({
   name:'',
   password:''
});
const[submit,submitted]=useState(false)
const printValues=e=>{
     e.preventDefault();
     setForm({
       name:data.name,
   password:data.password
     })
     submitted(true);
}
const update=e=>{
 setData({
   ...data,
   [e.target.name]:e.target.value
 });
};
 
  return (
    <div>
      <form onSubmit={printValues}>
       <input  value={data.name} name="name" onChange={update}/>
       <input type="password" value={data.password} name="password" onChange={update}/>
       <button>click</button>
       </form>
       <p >{submit ? form.name:null}</p>
       <p >{submit ? form.password:null}</p>
      {/* <div>
      <input type='button' value={"C"} onClick={e=>setSearch("")}/>
      <input type='button' value={"DEL"} onClick={e=>setSearch(search.slice(0,-1))}/>
      </div>
      <div>
      <input type='button' value={"7"} onClick={e=>setSearch(search+e.target.value)}/>
      <input type='button' value={"8"} onClick={e=>setSearch(search+e.target.value)}/>
      <input type='button' value={"9"} onClick={e=>setSearch(search+e.target.value)}/>
      </div><div>
      <input type='button' value={"+"} onClick={e=>setSearch(search+e.target.value)}/>
      <input type='button' value={"-"} onClick={e=>setSearch(search+e.target.value)}/>
      <input type='button' value={"*"} onClick={e=>setSearch(search+e.target.value)}/>
      <input type='button' value={"="} onClick={e=>setSearch(eval(search))}/> 
    </div> */}
    </div>
  )
}
