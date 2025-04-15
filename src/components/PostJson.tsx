import {PostJsonType} from "../models/PostJsonType.tsx";

type PostJsonPropType = {
	post:PostJsonType;
}

export const PostJson = ({post}: PostJsonPropType)=> {
	return <div className="mb-2">
		<h3 className="text-2xl" >{post.title}</h3>
		<div>{post.body}</div>
	</div>
}