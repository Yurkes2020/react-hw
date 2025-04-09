import {UserType} from "../models/typeUser.tsx";

type UserPropType = {
	user: UserType
}

export const TodoComponent = ({user}: UserPropType) => {

	const [userId, id, name, email, body] = Object.keys(user);

	return (
		<ul>
			<li>{userId}: {user.userId}  </li>
			<li>{id}: {user.id} </li>
			<li>{name}: {user.name} </li>
			<li>{email}: {user.email} </li>
			<li>{body}: {user.body} </li>
		</ul>
	)
}