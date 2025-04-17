import {Outlet} from "react-router-dom";
import {ActiveLink} from "../navigation/ActiveLink.tsx";

export function CommentsPage() {
	return (
		<>
			<div className="p-4 bg-gray-400 flex flex-wrap gap-4">
				<ActiveLink to="/comments/jsonplaceholder">JSONPlaceholder
				</ActiveLink>
				<ActiveLink to="/comments/dummyjson">DummyJSON
				</ActiveLink>
			</div>
			<Outlet/>
		</>
	);
}