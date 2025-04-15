import {useEffect, useState} from "react";
import {fetchCommentsFromDummyJson} from "../servises/api.servise.tsx";
import {CommentDummyType} from "../models/CommentDummyType.tsx";
import {CommentDummy} from "../components/CommentDummy.tsx";

export function CommentsDummyPage() {
	const [comments, setComments] = useState<CommentDummyType[]>([]);


	useEffect(() => {
		fetchCommentsFromDummyJson().then(setComments).catch(console.error);
	}, []);

	return (
		<div>
			<h2 className="text-center mb-2 text-2xl">Comments (CommentsDummy)</h2>
			{comments.map((comment: CommentDummyType) => (
				<CommentDummy comment={comment} key={comment.id} />
			))}
		</div>
	);
}