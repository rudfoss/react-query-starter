import { DefaultLayout } from "layouts"
import { Routes, Route } from "react-router-dom"
import { HomePage } from "./HomePage"
import { PostPage } from "./PostPage"
import { UserPage } from "./UserPage"

export const BaseRouter = () => (
	<Routes>
		<Route path="/" element={<DefaultLayout />}>
			<Route index element={<HomePage />} />
			<Route path="user/:userId">
				<Route index element={<UserPage />} />
				<Route path="posts" element={<PostPage />} />
			</Route>
		</Route>
	</Routes>
)
