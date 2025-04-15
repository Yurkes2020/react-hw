import {useEffect, useState} from "react";
import {fetchCommentsFromJsonPlaceholder} from "../servises/api.servise.tsx";
import {CommentJsonType} from "../models/CommentJsonType.tsx";
import {CommentJson} from "../components/CommentJson.tsx";

export function CommentsJsonPage() {
	const [comments, setComments] = useState<CommentJsonType[]>([]);

	useEffect(() => {
		fetchCommentsFromJsonPlaceholder().then(setComments).catch(console.error);
	}, []);

	return (
		<div>
			<h2 className="text-center mb-2 text-2xl">Comments (CommentsJson)</h2>
			{comments.map((comment: CommentJsonType) => (
				<CommentJson key={comment.id} comment={comment} />
			))}
		</div>
	);
}