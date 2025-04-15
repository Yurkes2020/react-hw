import {UserDummyType} from "../models/UserDummyType.tsx";

type UserDummyPropType = {
	user:UserDummyType;
}

export const UserDummy = ({user}: UserDummyPropType)=> {
	return <>
		<li>
			{user.firstName} ({user.lastName})
		</li>
	</>
}