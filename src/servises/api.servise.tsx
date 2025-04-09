import {UserType} from "../models/typeUser.tsx";


export const fetchUsers = async (): Promise<UserType[]> => {
	const response = await fetch(import.meta.env.VITE_API_URL + "/posts");

	if (!response.ok) {
		throw new Error("Failed to fetch user");
	}

	const {posts} = await response.json();

	return posts

}