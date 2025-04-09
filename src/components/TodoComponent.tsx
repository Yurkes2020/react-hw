import {UserType} from "../models/typeUser.tsx";

type UserPropType = {
	user: UserType
}

export const TodoComponent = ({user}: UserPropType) => {

	const [userId, id, title, body] = Object.keys(user);
	return (
		<ul>
			<li>{userId}: {user.userId}  </li>
			<li>{id}: {user.id} </li>
			<li>{title}: {user.title} </li>
			<li>{body}: {user.body} </li>
		</ul>
	)
}