import {TodoComponent} from "./TodoComponent.tsx";
import {useEffect, useState} from "react";
import {fetchUsers} from "../servises/api.servise.tsx";
import {UserType} from "../models/typeUser.tsx";


export const TodoComponents = () => {

	const [users, setUsers] = useState<UserType[]>([])

	useEffect(() => {

		const loadUsers = async () => {
				const data: UserType[] = await fetchUsers();
				setUsers(data);
		};

		loadUsers().catch((error) => {
			console.error("Error loading users:", error);

		});

	}, [])

	return (
		<div>
			{users.map((user: UserType, index) => {
				return <TodoComponent key={index} user={user}/>
			})}
		</div>
	)
}