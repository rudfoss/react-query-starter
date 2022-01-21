import { usePostsByUser } from "data/posts"
import { CommentViewer } from "features/CommentViewer"
import React from "react"
import { useParams } from "react-router-dom"

const PostPageComponent = () => {
	const { userId } = useParams<{ userId: string }>()
	const { data: posts = [] } = usePostsByUser(userId ? parseInt(userId) : undefined)
	return (
		<div>
			{posts.map((post) => (
				<div key={post.id}>
					<h3>{post.title}</h3>
					<p>{post.body}</p>
					<CommentViewer postId={post.id} />
					<hr />
				</div>
			))}
		</div>
	)
}

export const PostPage = React.memo(PostPageComponent) as unknown as typeof PostPageComponent
