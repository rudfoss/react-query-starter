import { Post } from "api/jsonPlaceholder"
import { useJSONPlaceholderAPI } from "contexts/jsonPlaceholderAPI"
import { useQuery } from "react-query"

const KEY_COMMENTS_BY_POST = (postId: Post["id"]) => ["commentsByPost", postId]

export const useCommentsByPost = (postId?: Post["id"]) => {
	const { api } = useJSONPlaceholderAPI()
	return useQuery(
		KEY_COMMENTS_BY_POST(postId ?? -1),
		async () => {
			const result = await api.fetchCommentsByPost(postId ?? -1)
			return result.data
		},
		{
			enabled: Boolean(postId)
		}
	)
}
