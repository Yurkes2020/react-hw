import { Outlet} from "react-router-dom";
import {ActiveLink} from "../navigation/ActiveLink.tsx";

export function UsersPage  () {
	return (
		<>
		<div className="p-4 bg-gray-400 flex flex-wrap gap-4">
			<ActiveLink to="/users/jsonplaceholder">JSONPlaceholder</ActiveLink>
			<ActiveLink to="/users/dummyjson">DummyJSON</ActiveLink>
		</div>
			<Outlet/>
		</>
	);
}