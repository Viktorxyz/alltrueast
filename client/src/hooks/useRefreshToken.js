import axios from "../api/axios.js"
import useAuth from "./useAuth.js"

const API_URL="/api/auth/refresh/"

export default async function useRefreshToken() {
	const { setAuth } = useAuth();

	async function refresh(){
		const { data } = await axios.get(API_URL, {
			withCredentials: true
		})
		setAuth(prev => {
			console.log(JSON.stringify(prev))
			console.log(data.accessToken)
			return {...prev, accessToken: data.accessToken}
		})
		return data.accessToken
	}
	return refresh
}
