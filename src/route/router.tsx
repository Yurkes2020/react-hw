import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../layouts/Layout.tsx";
import {CommentsDummyPage} from "../pages/CommentsDummyPage.tsx";
import {UsersJsonPage} from "../pages/UsersJsonPage.tsx";
import {UsersDummyPage} from "../pages/UsersDummyPage.tsx";
import {PostsJsonPage} from "../pages/PostsJsonPage.tsx";
import {PostsDummyPage} from "../pages/PostsDummyPage.tsx";
import {CommentsJsonPage} from "../pages/CommentsJsonPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "users", element: <UsersPage />,
				children: [
					{ path: "jsonplaceholder", element: <UsersJsonPage /> },
					{ path: "dummyjson", element: <UsersDummyPage /> },
				] },
			{ path: "posts", element: <PostsPage />,
				children:[
					{ path: "jsonplaceholder", element: <PostsJsonPage /> },
					{ path: "dummyjson", element: <PostsDummyPage /> },] },
			{ path: "comments", element: <CommentsPage />,
				children:[
					{ path: "jsonplaceholder", element: <CommentsJsonPage /> },
					{ path: "dummyjson", element: <CommentsDummyPage /> },] },
		],
	},
]);