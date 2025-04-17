import { Outlet} from "react-router-dom";
import {ActiveLink} from "../navigation/ActiveLink.tsx";

export function PostsPage() {
	return (
		<>
			<div className="p-4 bg-gray-400 flex flex-wrap gap-4">
				<ActiveLink to="/posts/jsonplaceholder">JSONPlaceholder</ActiveLink>
				<ActiveLink to="/posts/dummyjson">DummyJSON</ActiveLink>
			</div>
			<Outlet/>
		</>
	);
}