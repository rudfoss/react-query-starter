import { User } from "api/jsonPlaceholder"
import { useJSONPlaceholderAPI } from "contexts/jsonPlaceholderAPI"
import { useQuery } from "react-query"

const KEY_POSTS_BY_USER = (userId: User["id"]) => ["postsByUser", userId]

export const usePostsByUser = (userId?: User["id"]) => {
	const { api } = useJSONPlaceholderAPI()
	return useQuery(
		KEY_POSTS_BY_USER(userId ?? -1),
		async () => {
			const result = await api.fetchPostsByUser(userId ?? -1)
			return result.data
		},
		{
			enabled: Boolean(userId)
		}
	)
}
