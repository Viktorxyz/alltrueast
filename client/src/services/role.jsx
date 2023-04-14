import { redirect } from 'react-router-dom'
import axios from '../api/axios.js';

const API_URL = "/api/role"

export default async ({ request }) => {
	const formData = await request.formData()
    const submission = {
		"name": formData.get("name")
    }
	console.log(submission)
	try {
		const response = await axios.post(API_URL, submission,
			{
				headers: {
					'Content-Type': 'application/json'
				},
				withCredentials: true
			}
		)
		console.log(response)
		return null
	} catch (error) {
		const errorMessage = error.response.data.message
		console.log(errorMessage)
		return errorMessage
	}
}
