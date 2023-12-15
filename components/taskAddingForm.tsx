import {useState, useEffect} from "react";
import { useForm, Controller } from "react-hook-form";
import {useRouter} from "next/navigation";
import { RiLoader3Fill } from "react-icons/ri";

import axios from 'axios';

import Cookies from 'js-cookie';

import { BASE_URL, PORT } from '@/api/utils/info';



export function TaskAddingForm ({closeModal} : {
    closeModal : () => void;
}) {

    const router = useRouter()

    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const authToken = Cookies.get('authToken');

    // Fonction de récupération des catégories
    async function getCategories () {

        try {

            if (!authToken) {
                console.error("Le token d'authentification est manquant.");
                return; 
            }

            const config = {
                headers: {
                'Authorization': `Bearer ${authToken}`,
                },
            };

            const response = await axios.get(
                `${BASE_URL}:${PORT}/api/categories`,  
                config
            );
  
            setCategories(response.data);
        } catch (error) {
            console.error("Erreur lors de la requête vers le backend :", error.response);
        }

    }

    // Appel de la fonction de récupération des catégories
    useEffect(() => {
        getCategories()
    }, [authToken]);


    interface FormData {
        taskTitle : string;
        description : string;
        idCategorie : string;
    }

    const {
        handleSubmit,
        control,
        register,
        formState: { errors },
    } = useForm();

    async function onSubmit(data: FormData) {

        try {

            setLoading(true);

            if (!authToken) {
                console.error("Le token d'authentification est manquant.");
                return; 
            }

            const config = {
              headers: {
                'Authorization': `Bearer ${authToken}`,
              },
            };

            // Demande POST vers le backend avec axios
            const response = await axios.post(
              `${BASE_URL}:${PORT}/api/categories`,  
              {
                title: data.taskTitle,
                description : data.description,
                // idCategorie: idCategorie
              },
              config
            );

            // console.log('Succès', response.data); 
            router.push('/kanban')

        } catch (error) {
            // Gérez les erreurs
            console.error("Erreur lors de la requête vers le backend :", error.response);
        } finally {
          // Mettez le chargement à false, que la soumission réussisse ou échoue.
          setLoading(false);
          closeModal();
        }
    }


    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label className="mb-1" htmlFor="tastTitle">
                Titre de la tâche
            </label>

            <input
                className="w-full h-12 px-5 border-solid border-2 border-gray-400 bg-gray-200 focus:border-blue-500 focus:shadow-none focus:bg-white mb-1 rounded"
                id="tastTitle"
                type="text"
                placeholder="Modélisation de la base de données"
                {...register("tastTitle", {required : true})}
            />
            {errors.tastTitle && <span className="text-red-500 text-xs">Task's title is required</span>}
        </div>

        <div className="mb-3">
            <label className="mb-1" htmlFor="description">
                Descripton de la tâche
            </label>

            <textarea
                className="w-full h-12 px-5 border-solid border-2 border-gray-400 bg-gray-200 focus:border-blue-500 focus:shadow-none focus:bg-white mb-1 rounded"
                id="description"
                placeholder="Modélisation de la base de données"
                {...register("description", {required : true})}
            />
            {errors.description && <span className="text-red-500 text-xs">Task's description is required</span>}
        </div>

        <div className="mb-3">

            <label className="mb-1" htmlFor="description">
                Sélectionnez une catégorie
            </label>

            <Controller
                name="idCategorie"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <select
                        value={selectedCategory}
                        onChange={(e) => {
                            setSelectedCategory(e.target.value);
                            field.onChange(e);
                        }}
                    >
                        <option value="">-- Choisissez une catégorie --</option>
                        {categories.map(categorie => (
                            <option
                                key={categorie.idCategorie}
                                value={categorie.idCategorie}
                            >
                                {categorie.name}
                            </option>
                        ))}
                    </select>
                )}
            />
            {errors.description && <span className="text-red-500 text-xs">Task's description is required</span>}

        </div>
        
        <div className="text-right mt-5">
            <span 
                onClick={closeModal}
                className="bg-red-500 text-white py-[11px] px-4 hover:bg-red-600 rounded hover:cursor-pointer"
            >
                Annuler
            </span>
            <button className="text-white ml-4 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 relative">
                {loading && <RiLoader3Fill className="animate-spin absolute left-1/2 top-1/2 " />}
                Validate
            </button>
        </div>
    </form>  

}