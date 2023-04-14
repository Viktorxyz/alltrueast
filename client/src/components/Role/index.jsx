import { Form, useActionData } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function Role() {
	const errors = useActionData()

	const [name, setName] = useState('')
	const [nameFocus, setNameFocus] = useState(false)
	const [validName, setValidName] = useState(false)

	useEffect(() => {
		setValidName(name.length > 0)
	}, [name])

	return (
		<section>
			<Form method='POST' action='/role'>
				<input
					placeholder="Ime role-a"
					name="name"
					type="text"
					id="name"
					autoComplete="off"
					onChange={(e) => setName(e.target.value)}
					required
					aria-invalid={validName ? "false" : "true"}
					aria-describedby="note"
					onFocus={() => setNameFocus(true)}
					onBlur={() => setNameFocus(false)}
				/>
				<button disabled={!validName} type="submit">Dodaj role</button>
			</Form>
			<p>{errors}
			</p>
		</section>
	)
}
