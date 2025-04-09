type ReactionsType = {
	likes: number;
	dislikes: number;
}

export type UserType = {
	id: number;
	title: string;
	body: string;
	tags: string[];
	reactions:ReactionsType;
	views: number;
	userId: number;
}