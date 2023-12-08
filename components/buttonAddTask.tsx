"use client"
import { useState } from "react"
import {createPortal} from "react-dom"
import { ModalAddTask } from "@/components/modalAddTask"
import { MdOutlineAddBox } from "react-icons/md";


export function ButtonAddTask ({ text, buttonClassName, } : {
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
            <span className="mr-1"> 
                {text} 
            </span>
            <span className="mt-1"> 
                <MdOutlineAddBox />  
            </span>
        </button>
        { showModal && createPortal(<ModalAddTask closeModal={()=> setShowModal(false)} />, document.body) }
    </>    
        
}