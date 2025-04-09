import {UserType} from "../models/typeUser.tsx";


export const fetchUsers = async (): Promise<UserType[]> => {
	const response = await fetch(import.meta.env.VITE_API_URL);

	if (!response.ok) {
		throw new Error("Failed to fetch user");
	}

	return await response.json();

}