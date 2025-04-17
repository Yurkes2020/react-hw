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
				{posts.map((post: PostJsonType) => (
						<PostJson key={post.id} post={post} />
				))}
		</div>
	);
}