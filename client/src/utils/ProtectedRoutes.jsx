import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth.js'

export default function ProtectedRoutes() {
	const { auth } = useAuth()
	return (
		auth ? <Outlet /> : <Navigate to='/login' />
	)
}
