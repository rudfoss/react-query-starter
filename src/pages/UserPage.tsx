import { useUser } from "data/users"
import React from "react"
import { useParams, useNavigate, Link } from "react-router-dom"

const UserPageComponent = () => {
	const { userId } = useParams<{ userId: string }>()
	const { data: user, isLoading } = useUser(userId ? parseInt(userId) : undefined)

	const navigate = useNavigate()
	if (!userId) {
		navigate("/")
		return null
	}

	if (isLoading || !user) {
		return <p>Loading...</p>
	}

	return (
		<div>
			<h3>{user.name}</h3>
			<p>
				{user.username} - {user.email} - {user.phone}
			</p>
			<p>
				<Link to={`posts`}>Posts by {user.name}</Link>
			</p>
		</div>
	)
}

export const UserPage = React.memo(UserPageComponent) as unknown as typeof UserPageComponent
