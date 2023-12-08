"use client"
import { useState } from "react"
import {createPortal} from "react-dom"
import { ModalAddUser } from "@/components/modalAddUser"



export function ButtonAddUser ({ text, buttonClassName, } : {
    text: string;
    buttonClassName: string;
    // modalManagement: () => void
}) {

    const [showModal, setShowModal] = useState(false)

    const handleButtonClick = () => {
        setShowModal(true);
        // modalManagement();
        console.log(showModal)
    }

    return <>
        <button 
            className={buttonClassName}
            onClick={handleButtonClick}
        >
            {text}
        </button>
        { showModal && createPortal(<ModalAddUser closeModal={()=> setShowModal(false)} />, document.body) }
    </>    
        
}