import React from "react"
import { CreateUserPage } from "./CreateUserPage"

export interface ViewUserPageProps {}

const ViewUserPageComponent = (props: ViewUserPageProps) => {
	// /user/:idornew
	const { idornew = "new" } = useParms()

	if (idornew === "new") {
		return <CreateUserPage />
	}

	return <ViewUserPage />
}

export const ViewUserPage = React.memo(
	ViewUserPageComponent
) as unknown as typeof ViewUserPageComponent
