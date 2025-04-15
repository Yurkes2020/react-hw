import { useEffect, useState } from "react";
import { fetchUsersFromJsonPlaceholder } from "../servises/api.servise.tsx";
import {UserJsonType} from "../models/UserJsonType.tsx";
import {UserJson} from "../components/UserJson.tsx";


export const UsersJsonPage = () => {
	const [users, setUsers] = useState<UserJsonType[]>([]);


	useEffect(() => {
		fetchUsersFromJsonPlaceholder().then(setUsers).catch(console.error);
	}, []);

	return (
		<div>
			<h2 className="text-center mb-2 text-2xl">Users (JsonPlaceholder)</h2>
			<ul className="text-center">
				{users.map((user: UserJsonType) => (
					<UserJson user={user} key={user.id}/>
				))}
			</ul>
		</div>
	);
};


