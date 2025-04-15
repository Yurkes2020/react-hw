import {CommentDummyType} from "../models/CommentDummyType.tsx";

type CommentDummyPropType = {
	comment:CommentDummyType;
}

export const CommentDummy = ({comment}: CommentDummyPropType)=> {
	return <div className="mb-2"  >
		{comment.body}
	</div>
}