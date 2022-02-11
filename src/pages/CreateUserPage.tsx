import { useCreateUser } from "data/users"
import React, { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { onChangeValue } from "utils/onChangeValue"

export interface CreateUserPageProps {}

const CreateUserPageComponent = (props: CreateUserPageProps) => {
	const navigate = useNavigate()
	const { isLoading, mutateAsync: createUser } = useCreateUser()

	const [name, setName] = useState("")
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")

	const isValid = useMemo(() => {
		if (!name.trim()) return false
		if (!username.trim()) return false
		if (!email.match(/.+@.+/)) return false
		return true
	}, [name, username, email])

	const submit = async () => {
		await createUser({ name, username, email })
		navigate("/")
	}
	const onSubmit = async (evt: React.FormEvent) => {
		evt.preventDefault()
		submit()
	}

	return (
		<form onSubmit={onSubmit}>
			<div>
				<label htmlFor="name">Name</label>
				<input id="name" type="text" value={name} onChange={onChangeValue(setName)} />
			</div>
			<div>
				<label htmlFor="username">User name</label>
				<input id="username" type="text" value={username} onChange={onChangeValue(setUsername)} />
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input id="email" type="text" value={email} onChange={onChangeValue(setEmail)} />
			</div>
			<button disabled={!isValid || isLoading} onClick={submit}>
				Submit
			</button>
		</form>
	)
}

export const CreateUserPage = React.memo(
	CreateUserPageComponent
) as unknown as typeof CreateUserPageComponent
