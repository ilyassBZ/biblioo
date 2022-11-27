import axios from 'axios';
const CATEGORIE_BASE_REST_API_URL = 'http://localhost:8080/api/category';
const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBiaWJsaW8uY29tIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6ImJvb2s6cmVhZCJ9LHsiYXV0aG9yaXR5IjoidXNlcjpyZWFkIn0seyJhdXRob3JpdHkiOiJ1c2VyOndyaXRlIn0seyJhdXRob3JpdHkiOiJjYXRlZ29yeTpyZWFkIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJjYXRlZ29yeTp3cml0ZSJ9LHsiYXV0aG9yaXR5IjoiYm9vazp3cml0ZSJ9XSwiaWF0IjoxNjQ2NTY4ODkwLCJleHAiOjE2NDcxMjYwMDB9.ONPmN_7mzyjGLH4z78TDVnM3ZhNLGE5WdAx578dYsvEcZ1qsuLKiOxuFW-9BVz0zwVkK8AWqHOnt6tRwTyVD2g';
class CategorieService {




	getAllCategories() {

		return axios.get(CATEGORIE_BASE_REST_API_URL, { headers: { "Authorization": `Bearer ${token}` } })
	}
}

export default new CategorieService();