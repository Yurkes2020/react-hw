import {UserType} from "../models/typeUser.tsx";

type UserPropType = {
	user: UserType
}

export const TodoComponent = ({user}: UserPropType) => {

	return (
		<ul>
			<li><strong>id:</strong>    {user.id}</li>
			<li><strong>title:</strong> {user.title}</li>
			<li><strong>body:</strong> {user.body}</li>
			<li><strong>tags:</strong>  {user.tags.map(i => i+ ", ")}</li>
			<li><strong>likes:</strong>{user.reactions.likes}</li>
			<li><strong>dislikes:</strong>{user.reactions.dislikes}</li>
			<li><strong>views:</strong> {user.views}</li>
			<li><strong>userId:</strong> {user.userId}</li>
		</ul>
	)
}