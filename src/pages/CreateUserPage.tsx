import React, { useEffect } from "react"
import { useMutation, useQuery, useQueryClient } from "react-query"

const useUsers = () => {
	useQuery(["users"], ...)
}

const useMutateCreateUser = () => {
	const queryClient = useQueryClient()
	return useMutation((createUserDto: any) => "206844e8-7c50-430a-8379-c4136dc3d9e", {
		onSuccess: (userId) => {
			queryClient.invalidateQueries(["users"])
		}
	})
}

const CreateUserComponent = () => {
	const {isSuccess, isIdle, isLoading, isError, data: userId} = useMutateCreateUser()

	useEffect(() => {
		mutateCreateUser.mutate({ email , firstname, lastname })
	}, [])

	if (isSuccess) {
		return <Redirect to={`user/${userId}`}/>
	}
	if (isIdle || isLoading) {
		return <p>Loading...</p>
	}

		return <p>Oops...</p>
}

export const CreateUserPage = (React.memo(CreateUserComponent) as unknown) as typeof CreateUserComponent