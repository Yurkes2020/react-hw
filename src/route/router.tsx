import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../Layout.tsx";
import {CommentsDummyPage} from "../pages/CommentsDummyPage.tsx";
import {UsersJsonPage} from "../pages/UsersJsonPage.tsx";
import {UsersDummyPage} from "../pages/UsersDummyPage.tsx";
import {PostsJsonPage} from "../pages/PostsJsonPage.tsx";
import {PostsDummyPage} from "../pages/PostsDummyPage.tsx";
import {CommentsJsonPage} from "../pages/CommentsJsonPage.tsx";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "users/jsonplaceholder", element: <UsersJsonPage /> },
			{ path: "users/dummyjson", element: <UsersDummyPage /> },
			{ path: "posts/jsonplaceholder", element: <PostsJsonPage /> },
			{ path: "posts/dummyjson", element: <PostsDummyPage /> },
			{ path: "comments/jsonplaceholder", element: <CommentsJsonPage /> },
			{ path: "comments/dummyjson", element: <CommentsDummyPage /> },
		],
	},
]);