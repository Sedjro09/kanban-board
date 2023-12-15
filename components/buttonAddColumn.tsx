"use client"
import { useState } from "react"
import {createPortal} from "react-dom"
import { ModalAddColumn } from "@/components/modalAddColumn"



export function ButtonAddColumn ({ text, buttonClassName, } : {
    text: string;
    buttonClassName: string;
    // modalManagement: () => void
}) {

    const [showModal, setShowModal] = useState(false)

    // const handleButtonClick = () => {
    //     setShowModal(true);
    // }

    return <>
        <button 
            className={buttonClassName}
            onClick={setShowModal}
        >
            {text}
        </button>
        { showModal && createPortal(<ModalAddColumn closeModal={()=> setShowModal(false)} />, document.body) }
    </>    
        
}