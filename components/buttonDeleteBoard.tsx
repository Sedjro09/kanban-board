"use client"
import { useState } from "react"
import {createPortal} from "react-dom"
import { ModalDeleteBoard } from "@/components/modalDeleteBoard"



export function ButtonDeleteBoard ({ text, buttonClassName } : {
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
        { showModal && createPortal(<ModalDeleteBoard closeModal={()=>setShowModal(false)} />, document.body) }
    </>    
        
}