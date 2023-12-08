"use client"
import React from 'react'
import { useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs";
import { ButtonAddColumn } from "@/components/buttonAddColumn";
import { ButtonAddUser } from "@/components/buttonAddUser";
import { ButtonEditBoard } from "@/components/buttonEditBoard";
import { ButtonDeleteBoard } from "@/components/buttonDeleteBoard";

export function BoardOption() {

    const [isModalVisible, setIsModalVisible] = useState(false)

    const showBoardOption = () => {
        setIsModalVisible(true)
    }

    const hideBoardOption = () => {
        setIsModalVisible(false)
    }

  
    return <div className="relative p-2"
        onMouseEnter={showBoardOption}
        onMouseLeave={hideBoardOption}
    >

        <span 
            className="text-3xl text-gray-600 mt-0" 
        >
            <BsThreeDotsVertical />
        </span>

        { isModalVisible && (
            <div className=" flex flex-col absolute rounded top-10 -left-24 grow w-36 text-sm font-medium bg-white shadow-md z-8">
                <ButtonAddColumn 
                    buttonClassName="py-2 px-3 text-slate-800 hover:text-slate-900 hover:bg-gray-200" 
                    text="Add Column"
                />
                <ButtonAddUser 
                    buttonClassName="py-2 px-3 text-slate-800 hover:text-slate-900 hover:bg-gray-200" 
                    text="Add User"
                />
                <ButtonEditBoard
                    buttonClassName="py-2 px-3 text-slate-800 hover:text-slate-900 hover:bg-gray-200" 
                    text="Edit Board"
                />
                <ButtonDeleteBoard 
                    buttonClassName="py-2 px-3 text-slate-800 hover:text-slate-900 hover:bg-gray-200" 
                    text="Delete Board"
                />
            </div>
        ) }

    </div>
}
