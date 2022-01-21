import { useCommentsByPost } from "data/comments"
import React from "react"

export interface CommentViewerProps {
	postId: number
}

const CommentViewerComponent = ({ postId }: CommentViewerProps) => {
	const { data: comments = [], isLoading } = useCommentsByPost(postId)
	return (
		<div>
			<p>Comments {isLoading ? "loading..." : comments.length}</p>
			<ul>
				{comments.map((comment) => (
					<li key={comment.id}>
						{comment.body} - {comment.name}
					</li>
				))}
			</ul>
		</div>
	)
}

export const CommentViewer = React.memo(
	CommentViewerComponent
) as unknown as typeof CommentViewerComponent
