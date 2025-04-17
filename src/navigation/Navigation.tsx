import {ActiveLink} from "./ActiveLink.tsx";

export const Navigation = () => (
	<nav className="p-4 bg-gray-100 flex flex-wrap gap-4">
		<ActiveLink to="/users">Users</ActiveLink>
		<ActiveLink to="/posts">Posts</ActiveLink>
		<ActiveLink to="/comments">Comments</ActiveLink>
	</nav>
);


