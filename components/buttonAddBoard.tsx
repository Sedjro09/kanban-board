"use client"
import { useState } from "react"
import {createPortal} from "react-dom"
import { ModalAddBoard } from "@/components/modalAddBoard"



export function ButtonAddBoard ({ text, buttonClassName } : {
    text: string;
    buttonClassName: string;
}) {

    const [showModal, setShowModal] = useState(false)

    return <>
        <button 
            className={buttonClassName}
            onClick={() => setShowModal(true)}
        >
            {text}
        </button>
        { showModal && createPortal(<ModalAddBoard closeModal={()=>setShowModal(false)} />, document.body) }
    </>    
        
}