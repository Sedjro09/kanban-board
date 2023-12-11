import axios from "axios";

const BASE_URL = "http://10.10.34.141:8080"
// const TOKEN_KEY="0a4ae9421b52a54a5b26c6d5f94521520d00c216cdaa51f18a8e5054bca0bfdf"

export class CategoriesAPI {

    static async fetchCategories() {
        const response = await axios.get(`${BASE_URL}/api/categories`)
        console.log("***", response.data)
        return response.data
    }

}