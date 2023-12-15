"use client"
import { useState } from "react"
import {createPortal} from "react-dom"
import { ModalDeleteColumn } from "@/components/modalDeleteColumn"
import { RiDeleteBin6Line } from "react-icons/ri";



export function ButtonDeleteColumn ({ text, buttonClassName, idCategorie, nameCategorie } : {
    buttonClassName: string;
    idCategorie: string;
    nameCategorie: string;
}) {

    const [showModal, setShowModal] = useState(false)

    return <>
        <button 
            className={buttonClassName}
            onClick={() => setShowModal(true)}
        >
           <span><RiDeleteBin6Line /></span> 
        </button>
        { showModal && createPortal(<ModalDeleteColumn nameCategorie={nameCategorie} idCategorie={idCategorie} closeModal={()=>setShowModal(false)} />, document.body) }
    </>    
        
}