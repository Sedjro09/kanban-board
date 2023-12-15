"use client"
import {useState} from "react"
import React from 'react'
// import { Input } from "@/components/input"
// import { Button } from "@/components/button"
import { useForm } from "react-hook-form";
import Link from "next/link"
import { IoIosArrowBack } from "react-icons/io";

export default function Page() {

  // const [pseudo, setPseudo] = useState("Mon pseudo")
  // const [name, setName] = useState("Mon nom")
  // const [email, setEmail] = useState("Mon adresse email")

  interface FormData {
    username: string;
    email: string;
    password: string;
  }

  const {
    handleSubmit,
    register,
    formState: { errors }, watch
  } = useForm();

  const passwordValue = watch("password");


  async function onSubmit(data: FormData) {
    console.log(data);

    const userData = {
        username: data.username,
        email: data.email,
        password: data.password,
    };

    // Configuration de la requête
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    };

  }


  return (
    <div>

      <div className="ml-4 pt-5">
        <Link 
          className="py-2 px-3 inline-flex items-center rounded text-blue-600 underline hover:no-underline hover:bg-blue-500 hover:text-white"
          href="/kanban"
        >
          <IoIosArrowBack /> <span className="mr-2">Back to board</span> 
        </Link>
      </div>


      <div className="flex flex-col justify-center items-center bg-gray-100">
        <div className="w-2/4 bg-white rounded px-5 pb-7 pt-5" >
          
          <div className="mb-5">
            <h1 className="text-2xl font-semibold mb-3" >Votre Profile</h1>
            <p className="mb-6">Vos informations s'affichent ci-dessous : </p>
          </div>

          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="mb-1" htmlFor="username">
                  Votre username
                </label>

                <input
                  className="w-full h-12 px-5 border-solid border-2 border-gray-400 bg-gray-200 focus:border-blue-500 focus:shadow-none focus:bg-white mb-1 rounded"
                  id="username"
                  type="text"
                  placeholder="Sedjro"
                  {...register("username", {required : true})}
                />
                {errors.username && <span className="text-red-500 text-xs">Username is required</span>}
              </div>

              <div className="mb-4">
                <label className="mb-1" htmlFor="email">
                  Votre email
                </label>

                <input
                  className="w-full h-12 px-5 border-solid border-2 border-gray-400 bg-gray-200 focus:border-blue-500 focus:shadow-none focus:bg-white mb-1 rounded"
                  id="email"
                  type="text"
                  placeholder="yaya@gmail.com"
                  {...register("email", {required : true,  
                    pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Adresse e-mail invalide",
                    },
                  })}
                />
                {errors.email && <span className="text-red-500 text-xs">Adresse email invalide</span>}
              </div>

              <div className="mt-2">
                <button className="text-slate-100 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700">
                  Save
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
    
  )
}
