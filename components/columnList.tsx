"use client"
import { useState } from "react"
import {createPortal} from "react-dom"
import { ModalAddColumn } from "@/components/modalAddColumn"
import { Column } from "@/components/column"

export function ColumnList() {

    const [showModal, setShowModal] = useState(false)

    return <>
        <div className="flex overflow-x-auto h-full bg-gray-50">
            <Column name="To do" color="red" />
            <Column name="Doing" color="yellow" />
            <Column name="Done" color="green" />
            {/* <Column name="Done" color="indigo" />
            <Column name="Done" color="indigo" /> */}


            <div className="flex-shrink-0 w-72 flex flex-col m-5">   
                <div className="mb-3">Add Column</div>

                <div  
                    onClick={() => setShowModal(true)}
                    className="flex flex-col justify-center items-center h-full border-solid border-2 border-gray-300 rounded-md p-3 bg-gray-300 text-gray-500 hover:bg-gray-400 hover:cursor-pointer hover:text-slate-900"
                >
                    <span className="text-2xl font-semibold">+ New Column </span>     
                     
                </div>     
            </div>
        </div>
        { showModal && createPortal(<ModalAddColumn closeModal={()=>setShowModal(false)} />, document.body) }
    </>
}