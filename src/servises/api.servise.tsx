import {UserJsonType} from "../models/UserJsonType.tsx";
import {UserDummyType} from "../models/UserDummyType.tsx";
import {PostJsonType} from "../models/PostJsonType.tsx";
import {PostDummyType} from "../models/PostDummyType.tsx";
import {CommentJsonType} from "../models/CommentJsonType.tsx";
import {CommentDummyType} from "../models/CommentDummyType.tsx";

const usersJson = import.meta.env.VITE_API_URL_JSON + "/users"
const usersDummy = import.meta.env.VITE_API_URL_DUMMY+ "/users"
const postsJson = import.meta.env.VITE_API_URL_JSON+ "/posts"
const postsDummy = import.meta.env.VITE_API_URL_DUMMY+ "/posts"
const commentsJson = import.meta.env.VITE_API_URL_JSON+ "/comments"
const commentsDummy = import.meta.env.VITE_API_URL_DUMMY+ "/comments"


export const fetchUsersFromJsonPlaceholder = async (): Promise<UserJsonType[]> => {
	const res = await fetch(usersJson);
	if (!res.ok) throw new Error("Failed to fetch users");
	return res.json();
};

export const fetchUsersFromDummyJson = async (): Promise<UserDummyType[]> => {
	const res = await fetch(usersDummy);
	if (!res.ok) throw new Error("Failed to fetch users");
	const {users} = await res.json();
	return users
};

export const fetchPostsFromJsonPlaceholder = async (): Promise<PostJsonType[]> => {
	const res = await fetch(postsJson);
	if (!res.ok) throw new Error("Failed to fetch users");
	return res.json();
};

export const fetchPostsFromDummyJson = async (): Promise<PostDummyType[]> => {
	const res = await fetch(postsDummy);
	if (!res.ok) throw new Error("Failed to fetch users");
	const {posts} = await res.json();
	return posts
};

export const fetchCommentsFromJsonPlaceholder = async (): Promise<CommentJsonType[]> => {
	const res = await fetch(commentsJson);
	if (!res.ok) throw new Error("Failed to fetch users");
	return res.json();
};

export const fetchCommentsFromDummyJson = async (): Promise<CommentDummyType[]> => {
	const res = await fetch(commentsDummy);
	if (!res.ok) throw new Error("Failed to fetch users");
	const {comments} = await res.json();
	return comments
};