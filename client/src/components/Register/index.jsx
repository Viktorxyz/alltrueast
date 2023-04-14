import { Fragment, useState, useRef, useEffect } from "react"
import { Form, Link, useNavigation, useActionData } from 'react-router-dom'
import './index.css'
import validator from 'validator'

export default function Register() {

	const errors = useActionData()

	const [firstName, setFirstName] = useState('')
	const [validFirstName, setValidFirstName] = useState(false)
	const [firstNameFocus, setFirstNameFocus] = useState(false)

	const [lastName, setLastName] = useState('')
	const [validLastName, setValidLastName] = useState(false)
	const [lastNameFocus, setLastNameFocus] = useState(false)

	const [username, setUsername] = useState('')
	const [validUsername, setValidUsername] = useState(false)
	const [usernameFocus, setUsernameFocus] = useState(false)

	const [password, setPassword] = useState('')
	const [validPassword, setValidPassword] = useState(false)
	const [passwordFocus, setPasswordFocus] = useState(false)

	const [email, setEmail] = useState('')
	const [validEmail, setValidEmail] = useState(false)
	const [emailFocus, setEmailFocus] = useState(false)

	const [number, setNumber] = useState('')
	const [validNumber, setValidNumber] = useState(false)
	const [numberFocus, setNumberFocus] = useState(false)

	const [passwordMatch, setPasswordMatch] = useState('')
	const [validPasswordMatch, setValidPasswordMatch] = useState(false)
	const [passwordMatchFocus, setPasswordMatchFocus] = useState(false)

	const [success, setSuccess] = useState(false)

	useEffect(() => {
		setValidFirstName(true)
	}, [firstName])

	useEffect(() => {
		setValidLastName(true)
	}, [lastName])

	useEffect(() => {
		setValidUsername(true)
	}, [username])

	useEffect(() => {
		setValidEmail(validator.isEmail(email))
	}, [email])

	useEffect(() => {
		setValidNumber(validator.isMobilePhone(number, ['sr-RS', 'bs-BA']))
	}, [number])

	useEffect(() => {
		setValidPassword(password.length > 3)
		setValidPasswordMatch(password.length > 3 && password === passwordMatch)
	}, [password, passwordMatch])

	return (
		<section>
			<Form method="post" action="/register">
				<input
					placeholder="Ime"
					name="first_name"
					type="text"
					id="first_name"
					autoComplete="off"
					onChange={(e) => setFirstName(e.target.value)}
					required
					aria-invalid={validFirstName ? "false" : "true"}
					aria-describedby="fnnote"
					onFocus={() => setFirstNameFocus(true)}
					onBlur={() => setFirstNameFocus(false)}
				/>
				<br />
				{firstNameFocus && firstName && !validFirstName &&
					<Fragment>
						<p id="fnnote">
							Ime ne može da sadrži brojeve i specijalne znakove.
						</p>
 						<br />
					</Fragment>
				}
				<input
					placeholder="Prezime"
					name="last_name"
					type="text"
					id="last_name"
					autoComplete="off"
					onChange={(e) => setLastName(e.target.value)}
					required
					aria-invalid={validLastName ? "false" : "true"}
					aria-describedby="lnnote"
					onFocus={() => setLastNameFocus(true)}
					onBlur={() => setLastNameFocus(false)}
				/>
				<br />
				{lastNameFocus && lastName && !validLastName &&
					<Fragment>
						<p id="lnnote">
							Prezime ne može da sadrži brojeve i specijalne znakove.
						</p>
						<br />
					</Fragment>
				}
				<input
					placeholder="Nadimak"
					name="username"
					type="text"
					id="username"
					autoComplete="off"
					onChange={(e) => setUsername(e.target.value)}
					required
					aria-invalid={validUsername ? "false" : "true"}
					aria-describedby="uidnote"
					onFocus={() => setUsernameFocus(true)}
					onBlur={() => setUsernameFocus(false)}
				/>
				{usernameFocus && username && !validUsername &&
					<Fragment>
						<p id="uidnote">
							Nadimak nevažeći.
						</p>
						<br />
					</Fragment>
				}
				<br />
				<input
					placeholder="Email"
					name="email"
					type="email"
					id="email"
					onChange={(e) => setEmail(e.target.value)}
					required
					aria-invalid={validEmail ? "false" : "true"}
					aria-describedby="emailnote"
					onFocus={() => setEmailFocus(true)}
					onBlur={() => setEmailFocus(false)}
				/>
				<br />
				{emailFocus && email && !validEmail &&
					<Fragment>
						<p id="emailnote">
							Email nevažeći.
						</p>
						<br />
					</Fragment>
				}
				<input
					placeholder="Broj telefon"
					name="number"
					type="text"
					id="number"
					onChange={(e) => setNumber(e.target.value)}
					required
					aria-invalid={validNumber ? "false" : "true"}
					aria-describedby="numbernote"
					onFocus={() => setNumberFocus(true)}
					onBlur={() => setNumberFocus(false)}
				/>
				<br />
				{numberFocus && number && !validNumber &&
					<Fragment>
						<p id="numbernote">
							Broj telefona je nevažeći
						</p>
						<br />
					</Fragment>
				}
				{/* 				<input name="image" type="file" /> */}
				<input
					placeholder="Lozinka"
					name="password"
					type="password"
					id="password"
					autoComplete="off"
					onChange={(e) => setPassword(e.target.value)}
					required
					aria-invalid={validPassword ? "false" : "true"}
					aria-describedby="pwdnote"
					onFocus={() => setPasswordFocus(true)}
					onBlur={() => setPasswordFocus(false)}
				/>
				<br />
				{passwordFocus && password && !validPassword &&
					<Fragment>
						<p id="pwdnote">
							Lozinka mora sadržati velika i mala slova, brojeve i specijalne karaktere.
						</p>
						<br />
					</Fragment>
				}
				<input
					placeholder="Ponovite lozinku"
					name="password_confirm"
					type="password"
					id="password_confirm"
					autoComplete="off"
					onChange={(e) => setPasswordMatch(e.target.value)}
					required
					aria-invalid={validPasswordMatch ? "false" : "true"}
					aria-describedby="confirmnote"
					onFocus={() => setPasswordMatchFocus(true)}
					onBlur={() => setPasswordMatchFocus(false)}
	 			/>
				<br />
				{passwordMatchFocus && passwordMatch && !validPasswordMatch &&
					<p id="confirmnote">
						Mora se poklapati sa lozinkom.
					</p>
				}
	 			<button disabled={!validUsername || !validEmail || !validPasswordMatch || !validNumber || !validFirstName || !validLastName ? true : false} type="submit">Registruj se</button>
				<Link to="/login">Već imate nalog?</Link>
			</Form>
			<p>
				{errors}
			</p>
		</section>
	)
}
