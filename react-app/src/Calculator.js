import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Calculator() {
const [value,setValue]=useState('');

useEffect(()=>{
  document.addEventListener('keydown',press,true)
},[])
const press=(e)=>{
  var key=e.key;
  if(key>='0'||key<='9'){
    console.log("welcome")
  }else if(key==='+'|| key==='-'|| key==='*' ||key==='/'){
    console.log(key)
}
}
//  const[menuBar,setMenuBar]=useState(false)
//  const[data,setData]=useState({
//         name:'',
//         password:''
//  });
//  const[form,setForm]=useState({
//    name:'',
//    password:''
// });
// const[submit,submitted]=useState(false)
// const printValues=e=>{
//      e.preventDefault();
//      setForm({
//        name:data.name,
//    password:data.password
//      })
//      submitted(true);
// }
// const update=e=>{
//  setData({
//    ...data,
//    [e.target.name]:e.target.value
//  });
// };
 
  return (
    <div>
    <input placeholder={value} type='text'/>
      <div>
      <input type='button' value={"C"} onClick={e=>setValue("")}/>
      <input type='button' value={"DEL"} onClick={e=>setValue(value.toString().slice(0,-1))}/>
      </div>
      <div>
      <input type='button' value={"7"} onClick={e=>setValue(value + e.target.value)}/>
      <input type='button' value={"8"} onClick={e=>setValue(value + e.target.value)}/>
      <input type='button' value={"9"} onClick={e=>setValue(value + e.target.value)}/>
      </div><div>
      <input type='button' value={"+"} onClick={e=>setValue(value+e.target.value)}/>
      <input type='button' value={"-"} onClick={e=>setValue(value+e.target.value)}/>
      <input type='button' value={"*"} onClick={e=>setValue(value+e.target.value)}/>
      <input type='button' value={"="} onClick={e=>setValue(eval(value))}/> 
    </div> 
    </div>
  )
}
