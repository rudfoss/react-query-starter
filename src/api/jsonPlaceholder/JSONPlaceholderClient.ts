import { Post } from "./Post"
import { User } from "./User"
import { Comment } from "./Comment"
import { ResponseError } from "../ResponseError"

export interface ClientResponse<TDataType> {
	response: Response
	data: TDataType
}

export class JSONPlaceholderClient {
	private async doFetch<TDataType = any>(
		path: string,
		options: RequestInit = {}
	): Promise<ClientResponse<TDataType>> {
		const url = `https://jsonplaceholder.typicode.com/${path}`
		const response = await fetch(url, {
			headers: {
				"Content-Type": "application/json"
			}
		})

		if (response.ok) {
			return { response: response, data: await response.json() }
		}
		throw new ResponseError(response)
	}

	public async fetchUsers() {
		return this.doFetch<User[]>("users")
	}
	public async fetchUser(userId: number) {
		try {
			return this.doFetch<User>(`users/${userId}`)
		} catch (error) {
			if (!ResponseError.isResponseError(error)) throw error
			if (error.response.status === 404) return undefined
			throw error
		}
	}

	public async fetchPostsByUser(userId: number) {
		return this.doFetch<Post[]>(`posts?userId=${userId}`)
	}
	public async fetchCommentsByPost(postId: number) {
		return this.doFetch<Comment[]>(`comments?postId=${postId}`)
	}
}
