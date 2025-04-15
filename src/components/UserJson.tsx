import {UserJsonType} from "../models/UserJsonType.tsx";

type UserJsonPropType = {
	user:UserJsonType;
}

export const UserJson = ({user}: UserJsonPropType)=> {
	return <>
		<li>
			{user.name} ({user.username})
		</li>
	</>
}