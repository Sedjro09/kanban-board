import { BASE_URL, PORT } from "@/api/info";

export function register() {

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