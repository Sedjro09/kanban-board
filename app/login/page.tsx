"use client";
import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import {useRouter} from "next/navigation";
import { BASE_URL, PORT } from '@/api/utils/info';

import Link from "next/link";
import Cookies from 'js-cookie';

export default function Page() {

    const router = useRouter()

    interface FormData {
        email: string;
        password: string;
    }

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    // Importez la bibliothèque axios


    async function onSubmit(data: FormData) {
        try {
            // Faites la demande POST vers le backend avec axios
            const response = await axios.post(`${BASE_URL}:${PORT}/api/users/login`, {
            email: data.email,
            password: data.password,
            });

            // Traitez la réponse comme nécessaire
            // 
            const token = response.data.token;
            // console.log(token);
            console.log(response.data)
            Cookies.set('authToken', token);
            
            router.push('/kanban')
        } catch (error) {
            // Gérez les erreurs
            console.error("Erreur lors de la requête vers le backend :", error);
        }
    }

    


  return (
    <div className="w-1/3 bg-gray-50 p-5 shadow-lg rounded text-slate-900">
      <div className="mb-5">
        <div className="text-center text-3xl font-bold mb-3">
          Connexion au Kanban
        </div>
        <p className="text-center">Renseignez les informations de connexion</p>
      </div>
      <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
            <label className="mb-1" htmlFor="email">
              Entrez votre email
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
        
        <div className="mb-2">
            <label className="mb-1" htmlFor="password">
              Entrez votre mot de passe
            </label>

            <input
              className="w-full h-12 px-5 border-solid border-2 border-gray-400 bg-gray-200 focus:border-blue-500 focus:shadow-none focus:bg-white mb-1 rounded"
              id="password"
              type="password"
              {...register("password", {required : true, 
                minLength: {
                value: 6,
                message: "Le mot de passe doit avoir au moins 6 caractères",
                },
              })}
            />
            {errors.password && <span className="text-red-500 text-xs">Le mot de passe doit avoir au moins 6 caractères</span>}
        </div>

          <div className="mt-2">
            <button className="text-white px-4 py-2 rounded bg-blue-600 hover:bg-blue-700">
              Sign in
            </button>
          </div>

        </form>

      </div>
      <p className="mt-4">
        Vous n'avez pas encore de compte ?
        <Link href="/signup" className="text-blue-700 ml-2 underline">
          Inscrivez-vous
        </Link>{" "}
        !
      </p>
    </div>
  );
}
