import React from "react"
import { NavLink, Outlet } from "react-router-dom"

const DefaultLayoutComponent = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<NavLink to="/" end>
							Home
						</NavLink>
					</li>
				</ul>
			</nav>
			<main>
				<Outlet />
			</main>
		</>
	)
}

export const DefaultLayout = React.memo(
	DefaultLayoutComponent
) as unknown as typeof DefaultLayoutComponent
