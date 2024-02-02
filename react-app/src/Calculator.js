import React from 'react'
import { useState } from 'react'

export default function Calculator() {
 const [search,setSearch]=useState('')
  return (
    <div>
      <input type='text' value={search}/>
      <div>
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
    </div>
    </div>
  )
}
