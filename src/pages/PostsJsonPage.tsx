import {useEffect, useState} from "react";
import {fetchPostsFromJsonPlaceholder} from "../servises/api.servise.tsx";
import {PostJsonType} from "../models/PostJsonType.tsx";
import {PostJson} from "../components/PostJson.tsx";

export function PostsJsonPage() {
	const [posts, setPosts] = useState<PostJsonType[]>([]);


	useEffect(() => {
		fetchPostsFromJsonPlaceholder().then(setPosts).catch(console.error);
	}, []);

	return (
		<div>
			<h2 className="text-center mb-2 text-2xl">Posts (JsonPlaceholder)</h2>
				{posts.map((post: PostJsonType) => (
						<PostJson key={post.id} post={post} />
				))}
		</div>
	);
}