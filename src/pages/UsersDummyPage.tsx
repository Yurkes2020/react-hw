import {useEffect, useState} from "react";
import {fetchUsersFromDummyJson} from "../servises/api.servise.tsx";
import {UserDummyType} from "../models/UserDummyType.tsx";
import {UserDummy} from "../components/UserDummy.tsx";

export function UsersDummyPage() {
	const [users, setUsers] = useState<UserDummyType[]>([]);


	useEffect(() => {
		fetchUsersFromDummyJson().then(setUsers).catch(console.error);
	}, []);

	return (
		<div>
			<h2 className="text-center mb-2 text-2xl">Users (DummyJson)</h2>
			<ul className="text-center">
				{users.map((user: UserDummyType) => (
					<UserDummy user={user} key={user.id}/>
				))}
			</ul>
		</div>
	);
}