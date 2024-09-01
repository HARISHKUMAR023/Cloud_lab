import React from 'react'
import { FaServer } from "react-icons/fa";
import { BsCpuFill } from "react-icons/bs";
import { MdOutlineWebAsset } from "react-icons/md";
const servicecard =[
    {
        id:1,
        icone:<BsCpuFill/>,
        name:"Virtual michine"
    },
    {
        id:2,
        icone:<MdOutlineWebAsset/>,
        name:"StaticSide Hosting"
    }
]
const DbCard = () => {
  return (
    <div className='flex flex-wrap mx-3'>
        {servicecard.map((items)=>(
            <div key={items.id} className='bg-slate-200 shadow-md p-2 m-2 rounded-md flex items-center justify-around w-auto h-24  border border-gray-800 hover:shadow-lg '>
                <span className='text-4xl p-2 text-primary'>{items.icone}</span>
                <h1 className='text-primary font-bold'> {items.name}</h1>
            </div>
        ))}
    </div>
  )
}

export default DbCard