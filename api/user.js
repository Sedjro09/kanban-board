import axios from "axios";

const BASE_URL = "http://10.10.34.141:8080"
// const TOKEN_KEY="0a4ae9421b52a54a5b26c6d5f94521520d00c216cdaa51f18a8e5054bca0bfdf"

export class User {
  
    static async register() {
        const response = await axios.get(`${BASE_URL}/api/users/register`)
        console.log("***", response.data)
        return response.data
    }

}





async function getUser(email: string): Promise<User | undefined> {
    try {
      const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
      return user.rows[0];
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }