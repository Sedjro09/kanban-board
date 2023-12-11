'use client'
import axios from "axios";
import React from 'react'
import {useState, useRef} from 'react'
import {Input} from '@/components/input'
import {Button} from '@/components/button'
import Link from 'next/link'

export default function Page() {

    const username = useRef()
    const password = useRef()
    const confirmPassword = useRef()
    const email = useRef()
    const firstname = useRef()
    const surname = useRef()
    const phone = useRef()
    const address = useRef()

    const role = "user"

    function handleSubmit(e) {
        e.preventDefault()

        if(password.current.value === confirmPassword.current.value) {

            const newUser = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
                role: role,
                firstname: firstname.current.value,
                surname: surname.current.value,
                phone: phone.current.value,
                address: address.current.value
            }


            // axios.post('http://10.10.34.141:8080/api/users/register', newUser)
            // .then(response => {
            //     console.log('Réponse du backend:', response.data);
            // })
            // .catch(error => {
            //     console.error('Erreur de requête', error.message);
            //     // Plus d'informations sur l'erreur
            //     if (error.response) {
            //     // La requête a été faite et le serveur a répondu avec un code d'état non conforme
            //     console.error('Réponse du serveur:', error.response.data);
            //     console.error('Statut du serveur:', error.response.status);
            //     console.error('En-têtes de la réponse:', error.response.headers);
            //     } else if (error.request) {
            //     // La requête a été faite mais aucune réponse n'a été reçue
            //     console.error('Aucune réponse reçue');
            //     } else {
            //     // Une erreur s'est produite lors de la configuration de la requête
            //     console.error('Erreur de configuration de la requête:', error.message);
            //     }
            // });




        }

    }

  return (
    
        <div className='w-2/3 bg-gray-50 p-5 shadow-lg rounded text-slate-900'> 
            <div className="mb-5">
                <div className="text-center text-3xl font-bold mb-3">Inscription au Kanban</div>
                <p className="text-center" >Renseignez les informations pour vous inscrire</p>
            </div>
            <div> 
                <form onSubmit={handleSubmit}>
                    <div className="flex" >
                        <div className="w-1/2 mr-5" >
                            <Input 
                                label="Choisissez un nom d'utilisateur"
                                type="text" 
                                placeholder="Sedjro"
                                inputRef={username}
                            />
                        </div>
                        <div className="w-1/2 ml-5">
                            <Input 
                                label="Votre email"
                                type="text" 
                                placeholder="email@gmail.com"
                                inputRef={email}
                            />
                        </div>
                        
                    </div>

                    <div className="flex" >
                        <div className="w-1/2 mr-5" >
                            <Input 
                                label="Votre prénom"
                                type="text" 
                                placeholder="Israël"
                                inputRef={firstname}
                            />
                        </div>
                        <div className="w-1/2 ml-5">
                            <Input 
                                label="Votre nom"
                                type="text" 
                                placeholder="Segodo"
                                inputRef={surname}
                            />
                        </div>
                        
                    </div>

                    <div className="flex" >
                        <div className="w-1/2 mr-5" >
                            <Input 
                                label="Numéro de téléphone"
                                type="text" 
                                placeholder="+22957475747"
                                inputRef={phone}
                            />
                        </div>
                        <div className="w-1/2 ml-5">
                            <Input 
                                label="Votre Adresse"
                                type="text" 
                                placeholder="2ème rue"
                                inputRef={address}
                            />
                        </div>
                        
                    </div>
                    
                    <Input 
                        label="Votre mot de passe"
                        type="password" 
                        placeholder="Mettez votre mot de passe"
                        inputRef={password}
                    />
                    <Input 
                        label="Confirmez votre mot de passe"
                        type="password" 
                        placeholder="Remettez votre mot de passe"
                        inputRef={confirmPassword}
                    />

                    <input type="text" value={role} hidden />

                    <div className="mt-2">
                        <Button 
                            buttonClassName='text-white px-4 py-2 rounded bg-blue-600 hover:bg-blue-700'
                            text='Sign Out'
                        />
                    </div>
                </form>
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
        
    
  )
}
