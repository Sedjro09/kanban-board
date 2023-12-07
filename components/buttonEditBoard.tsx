"use client"
import { useState } from "react"
import {createPortal} from "react-dom"
import { ModalEditBoard } from "@/components/modalEditBoard"



export function ButtonEditBoard ({ text, buttonClassName } : {
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
        { showModal && createPortal(<ModalEditBoard closeModal={()=>setShowModal(false)} />, document.body) }
    </>    
        
}