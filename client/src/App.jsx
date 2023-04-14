import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Login from './routes/Login'
import Register from './routes/Register.jsx'
import Home from './routes/Home.jsx'
import Role from './routes/Role.jsx'
import ProtectedRoutes from './utils/ProtectedRoutes.jsx'
import './App.css'

// ACTIONS
import loginAction from './services/login.jsx'
import registerAction from './services/register.jsx'
import createRoleAction from './services/role.jsx'


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path='/login' element={<Login />} action={loginAction}/>
			<Route path='/register' element={<Register />} action={registerAction} />
			<Route element={<ProtectedRoutes />}>
				<Route
					path='/'
					element={<Home />}
					loader={({ request }) => {
						console.log(request)
						return request
					}}
				/>
				<Route path='/role' element={<Role />} action={createRoleAction} />
			</Route>
		</Route>
	)
)

function App() {
    return (
		<RouterProvider router={router} />
    )
}

export default App
