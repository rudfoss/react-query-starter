import { User } from "api/jsonPlaceholder"
import { useJSONPlaceholderAPI } from "contexts/jsonPlaceholderAPI"
import { useMutation, useQuery, useQueryClient } from "react-query"

const KEY_USERS = ["users"]
const KEY_USER = (id: User["id"]) => ["users", id]

export const useUsers = () => {
	const { api } = useJSONPlaceholderAPI()
	const queryClient = useQueryClient()
	return useQuery(
		KEY_USERS,
		async () => {
			const result = await api.fetchUsers()
			return result.data
		},
		{
			onSuccess: (users) => {
				// Hydrate the user cache once we have all users to avoid refetch for specific users.
				for (const user of users) {
					queryClient.setQueryData(KEY_USER(user.id), user)
				}
			}
		}
	)
}

export const useUser = (userId?: User["id"]) => {
	const { api } = useJSONPlaceholderAPI()
	return useQuery(
		KEY_USER(userId ?? -1),
		async () => {
			const result = await api.fetchUser(userId ?? -1)
			return result?.data
		},
		{
			enabled: Boolean(userId)
		}
	)
}

export const useCreateUser = () => {
	const { api } = useJSONPlaceholderAPI()
	const queryClient = useQueryClient()
	return useMutation(api.createUser, {
		onSuccess: ({ data: user }) => {
			queryClient.setQueryData(KEY_USER(user.id), user)
			queryClient.setQueryData<User[]>(KEY_USERS, (users) => {
				return (users ?? []).concat(user)
			})
		}
	})
}
