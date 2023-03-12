import React from 'react'
import {MdOutlineClose } from 'react-icons/md'

export default function Modal({open , children ,onClose}) {
    if (!open) return null
  return(
    <div className='fixed top-10  left-100 backdrop-blur-sm transistion-all  w-full h-full z-30' >
    <button className='p-10 pr-12  mr-12 float-right transition-all'
    onClick={onClose}>
    <MdOutlineClose size={56} className="transition-all" />
    </button>
    <div className='ml-10 p-10'>
      {children}
      </div>
    </div> 
  )
}
