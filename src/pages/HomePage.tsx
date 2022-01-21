import { useUsers } from "data/users"
import React from "react"
import { Link } from "react-router-dom"

const HomePageComponent = () => {
	const { data: users = [], isLoading, isFetching } = useUsers()
	return (
		<div>
			{isLoading && <p>Loading users...</p>}
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						<Link to={`user/${user.id}`}>
							{user.id} - {user.name}
						</Link>
					</li>
				))}
			</ul>
			{!isLoading && isFetching && <p>Reloading users...</p>}
		</div>
	)
}

export const HomePage = React.memo(HomePageComponent) as unknown as typeof HomePageComponent
