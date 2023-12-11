import axios from "axios";

const BASE_URL = "http://10.10.34.141:8080"

export class BoardAPI {

    static async fetchBoards() {
        const response = await axios.get(`${BASE_URL}/api/categories`)
        return response.data
    }

}

