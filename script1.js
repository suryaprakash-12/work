// 

const u=[
    {name:'surya',mark:55},
    {name:'sony',mark:25},
    {name:'doni',mark:45},
    {name:'sur',mark:65},

];
const t=[
    {name:'soori',mark:55},
    {name:'saga',mark:55},
]
// const hi= u.map((e)=>{
//     e.mark<35
//     ?
//     e['grade']='fail'
//     :
//     e['grade']='pass'
//     return e;
// })

//<---find method--->
// const hi=u.find((e)=>{
//     return e.name==="sony" && e.mark===25;
// })
//<---fillter method--->
// const hi=u.filter((e)=>{
//     return  e.mark>35;
// })
const hi=[...t,...u]
console.log(hi)