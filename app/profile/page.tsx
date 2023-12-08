"use client"
import {useState} from "react"
import React from 'react'
import { Input } from "@/components/input"
import { Button } from "@/components/button"

export default function Page() {

  const [pseudo, setPseudo] = useState("Mon pseudo")
  const [name, setName] = useState("Mon nom")
  const [email, setEmail] = useState("Mon adresse email")

  return (
    <div className="h-full flex justify-center items-center bg-gray-100">
      <div className="w-2/4 bg-white rounded px-5 pb-7 pt-5" >

        
        <h1 className="text-2xl font-semibold mb-3" >Votre Profile</h1>
        <p className="mb-6">Vos informations s'affichent ci-dessous : </p>

        
      
        <Input 
          label="Votre pseudo"
          placeholder="" 
          value={pseudo} 
          onChange={(e) => setPseudo(e.target.value)} 
        />
        <Input 
          label="Votre nom"
          placeholder="" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <Input 
          label="Votre adresse email"
          placeholder="" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />

      
        <div className="mt-4">
          <Button
            text="Save"
            onClick={()=>null}
            buttonClassName="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 rounded-sm"
          
          />
        </div>


      </div>
    </div>
  )
}
