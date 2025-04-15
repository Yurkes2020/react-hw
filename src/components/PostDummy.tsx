import {PostDummyType} from "../models/PostDummyType.tsx";

type PostDummyPropType = {
	post:PostDummyType;
}

export const PostDummy = ({post}: PostDummyPropType)=> {
	return <div className="mb-2"  >
		<h3 className="text-2xl" >{post.title}</h3>
		<div>{post.body}</div>
	</div>
}