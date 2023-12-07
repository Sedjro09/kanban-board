'use client'
import React from 'react'
import {useState} from 'react'
import {Input} from '@/components/input'
import {Button} from '@/components/button'
import Link from 'next/link'

export default function Page() {

    const [pseudo, setPseudo] = useState("")
    const [password, setPassword] = useState("")

  return (
    <div className='h-screen bg-slate-200 flex flex-col items-center justify-center'>
        <div className='w-1/3 bg-gray-50 p-5 shadow-lg rounded text-slate-900'> 
            <div className="mb-5">
                <div className="text-center text-3xl font-bold mb-3">Inscription au Kanban</div>
                <p className="text-center">Renseignez les informations pour vous inscrire</p>
            </div>
            <div>   
                <Input 
                    label="Votre Pseudo"
                    type="text" 
                    placeholder="Sedjro"
                    value={pseudo}
                    onChange={(e) => setPseudo(e.target.value)}
                />
                <Input 
                    label="Votre mot de passe"
                    type="password" 
                    placeholder="Mettez votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input 
                    label="Confirmez votre mot de passe"
                    type="password" 
                    placeholder="Remettez votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div className="mt-2">
                    <Button 
                        buttonClassName='text-white px-4 py-2 rounded bg-blue-600 hover:bg-blue-700'
                        text='Sign In'
                        onClick={() => null}
                    />
                </div>
            
            </div>
            <p className="mt-4">
                Avez-vous déjà un compte ? 
                <Link 
                    href="/login"
                    className="text-blue-700 ml-2 underline"
                > 
                    Connectez-vous
                </Link> !
            </p>

        
        </div>
        
    </div>
  )
}
