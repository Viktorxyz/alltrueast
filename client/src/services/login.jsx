import { redirect } from 'react-router-dom'
import axios from '../api/axios.js'
import useAuth from '../hooks/useAuth.js'

const API_URL = "/api/auth/login/"

export default async ({request}) => {
    const formData = await request.formData()
    const submission = {
		"username": formData.get("username"),
		"password": formData.get("password")
    }
	try {
		const { data } = await axios.post(API_URL, submission,
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		return redirect('/')
	} catch (error) {
		const errorMessage = error.response.data.message
		return errorMessage
	}
}
