import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate.js'

export default function Home() {
	const axiosPrivate = useAxiosPrivate()
	const req = useLoaderData()

	const [users, setUsers] = useState()

	useEffect(() => {
		const getUsers = async () => {
			try {
				const res = await axiosPrivate.get('/api/user')
				setUsers(res.data)
			} catch (error) {
				console.log(error)
			}
		}
		getUsers()
	}, [])

    return (
		<section>
			<p>Users</p>
			{users?.length
				? (
					<ul>
						{users.map((user, i) => <li key={i}>{user?.username}</li>)}
					</ul>
				) : (<p>No users to display</p>)
			}
		</section>
	)
}
