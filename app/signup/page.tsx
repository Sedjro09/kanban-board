"use client";
import React from "react";
import {useRouter} from "next/navigation";
import { RiLoader3Fill } from "react-icons/ri";

import { BASE_URL, PORT } from '@/api/utils/info';
// import axios from "axios";
import { useForm, watch } from "react-hook-form";
import Link from "next/link";

export default function Page() {

  const router = useRouter()
  
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

  const [loading, setLoading] = React.useState(false);


  async function onSubmit(data: FormData) {

    setLoading(true);
    //console.log(data);

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

    try {
        // Effectuer la requête POST vers le backend avec async/await
        const response = await fetch(`${BASE_URL}:${PORT}/api/users/register`, requestOptions);

        if (!response.ok) {
            // Si la réponse n'est pas OK (par exemple, une erreur 404), lancer une exception
            throw new Error(`La requête a échoué avec le code d'erreur ${response.status}`);
        }

        const responseData = await response.json();

        // Faire quelque chose avec les données de réponse
        console.log(responseData);
        router.push('/login');
    } catch (error) {
        // Gérer les erreurs
        console.error("Erreur lors de la requête vers le backend :", error);
    } finally {
      // Mettez le chargement à false, que la soumission réussisse ou échoue.
      setLoading(false);
    }
  }




  return (
    <div className="w-1/3 bg-gray-50 p-5 shadow-lg rounded text-slate-900">
      <div className="mb-5">
        <div className="text-center text-3xl font-bold mb-3">
          Inscription au Kanban
        </div>
        <p className="text-center">
          Renseignez les informations pour vous inscrire
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="mb-1" htmlFor="username">
              Votre nom d'utilisateur
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

          <div className="mb-2">
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

          <div className="mb-2">
            <label className="mb-1" htmlFor="password">
              Choisissez un mot de passe
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
          <div className="mb-2">
            <label className="mb-1" htmlFor="confirmPassword">
              Confirmez le mot de passe
            </label>

            <input
              className="w-full h-12 px-5 border-solid border-2 border-gray-400 bg-gray-200 focus:border-blue-500 focus:shadow-none focus:bg-white mb-1 rounded"
              id="confirmPassword"
              type="password"
              {...register("confirmPassword", {required : true,
                validate: (value) =>
                  value === watch("password") ||
                  "Les mots de passe ne correspondent pas",

              })}
            />
            {errors.confirmPassword && <span className="text-red-500 text-xs">Les mots de passe ne correspondent pas</span>}
          </div>

          <div className="mt-2">
            <button className="text-white px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 relative">
                {loading && <RiLoader3Fill className="animate-spin absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
                Sign up
            </button>
          </div>
        </form>
      </div>
      <p className="mt-4">
        Avez-vous déjà un compte ?
        <Link href="/login" className="text-blue-700 ml-2 underline">
          Connectez-vous
        </Link>{" "}
        !
      </p>
    </div>
  );
}
