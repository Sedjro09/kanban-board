'use client'

import React from 'react'
import { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import Link from "next/link"

export function Profil() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showProfileModal = () => {
        setIsModalVisible(true);
    };

    const hideProfileModal = () => {
        setIsModalVisible(false);
    };

    return <div className="relative p-2"
        onMouseEnter={showProfileModal} 
        onMouseLeave={hideProfileModal}
    >
        <span 
            className="text-3xl text-gray-600 mt-0"
        >
                <CgProfile />
        </span>   

        { isModalVisible && (
            <div className=" flex flex-col absolute rounded top-10 -left-24 grow w-36 text-sm font-medium bg-white shadow-md z-10">
                <Link 
                    href="/profile"
                    className="py-2 px-3 text-slate-800 hover:text-slate-900 hover:bg-gray-200"
                >
                    Check profile
                </Link> 
                <Link 
                    href="/editprofile"
                    className="py-2 px-3 text-slate-800 hover:text-slate-900 hover:bg-gray-200"
                >
                    Edit profile
                </Link> 
               
            </div>
        )}   
    </div>
}
