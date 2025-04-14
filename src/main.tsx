import {createRoot} from 'react-dom/client'
import './index.css'
import RootLayout from "./RootLayout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "users", element: <div>Users Page</div> },
			{ path: "posts", element: <div>Posts Page</div> },
			{ path: "comments", element: <div>Comments Page</div> },
			{ path: "products", element: <div>Products Page</div> },
		],
	},
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
