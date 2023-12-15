import { useState, useEffect } from "react";
import Cookies from 'js-cookie';


export function Task ({ idCategorie } : {
    idCategorie : string;
}) {

    const [tasksByCategories, setTasksByCategories] = useState([])

    async function getTasksByCategories() {
        try {
            // Récupération du token
            const authToken = Cookies.get('authToken');
            if (!authToken) {
                console.error("Le token d'authentification est manquant.");
                return;
            }
            
            // Envoi de la requête
            const response = await axios.get(
                `${BASE_URL}:${PORT}/api/categories`,
                {
                    header: {
                        'Authorization': `Bearer ${authToken}`,
                    },
                };
            );

            setTasksByCategories(response.data);
            console.log("Les tasks récupérées : " response.data);

        } catch(error) {
            console.error("Erreur lors de la récupération des tâches par catégories", error);
            throw error;
        }
    }

    useEffect(() => {
        getTasksByCategories();
    }, [])



    return <>
        <div className="bg-gray-100 cursor-grab shadow-lg p-3 rounded-lg mx-3 mt-3">
            <div className="text-slate-700 font-semibold text-base mb-2">Modélisation de la base de données</div>
            <p className="text-slate-600 font-light text-xs">Faire les graphes qui feront ressortir toutes les fonctionnalités à implémenter.</p>                   
            <div className="text-right mt-1">
                <span className=" px-2 py-1 rounded font-medium bg-slate-500 text-slate-100 text-xs">Added by : Sedjro</span>
            </div>
        </div>
    </>
}