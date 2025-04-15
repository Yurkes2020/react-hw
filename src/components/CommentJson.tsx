import {CommentJsonType} from "../models/CommentJsonType.tsx";

type CommentJsonPropType = {
	comment:CommentJsonType;
}

export const CommentJson = ({comment}: CommentJsonPropType)=> {
	return <div className="mb-2"  >
		<h3 className="text-2xl" >{comment.name}</h3>
		<div>{comment.body}</div>
	</div>
}