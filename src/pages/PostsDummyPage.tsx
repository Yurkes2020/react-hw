import {useEffect, useState} from "react";
import {fetchPostsFromDummyJson} from "../servises/api.servise.tsx";
import {PostDummyType} from "../models/PostDummyType.tsx";
import {PostDummy} from "../components/PostDummy.tsx";

export function PostsDummyPage() {
	const [posts, setPosts] = useState<PostDummyType[]>([]);

	useEffect(() => {
		fetchPostsFromDummyJson().then(setPosts).catch(console.error);
	}, []);

	return (
		<div>
			<h2 className="text-center mb-2 text-2xl">Posts (PostsDummy)</h2>
			{posts.map((post: PostDummyType) => (
				<PostDummy post={post} key={post.id} />
			))}
		</div>
	);
}