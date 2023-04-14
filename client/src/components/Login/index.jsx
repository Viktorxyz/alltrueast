import { Fragment } from 'react'
import { Form, Link, useActionData, useNavigation} from 'react-router-dom'
import './index.css'

const Login = () => {
	const navigation = useNavigation()
	const actionData = useActionData()

	return (
		<Fragment>
			<Form method='post'>
				<input name='username' type='text' placeholder='Username' required />
				<input name='password' type='password' placeholder='Lozinka' required />
				<button type='submit'>Prijavi se</button>
				<Link to='/register'>Registruj se</Link>
			</Form>
			{navigation.state && (<p>{navigation.state}</p>)}
		</Fragment>
	)
}
export default Login
