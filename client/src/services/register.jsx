import { redirect } from 'react-router-dom'
import axios from '../api/axios.js'

const API_URL = "/api/auth/register/"

export default async ({ request }) => {
    const formData = await request.formData()
    const submission = {
		"first_name": formData.get("first_name"),
		"last_name": formData.get("last_name"),
		"username": formData.get("username"),
		"password": formData.get("password"),
		"email": formData.get("email"),
		"number": formData.get("number")
    }
	console.log(submission)
	try {
		const res = await axios.post(API_URL, submission,
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		console.log(res)
		return redirect('/login')
	} catch (error) {
		const errorMessage = error.response.data.message
		console.log(errorMessage)
		return errorMessage
	}
}
