import { Link } from "react-router-dom";

const Navigation = () => (
	<nav className="p-4 bg-gray-100 flex flex-wrap gap-4">
		<Link to="/users/jsonplaceholder">Users (JSONPlaceholder)</Link>
		<Link to="/users/dummyjson">Users (DummyJSON)</Link>

		<Link to="/posts/jsonplaceholder">Posts (JSONPlaceholder)</Link>
		<Link to="/posts/dummyjson">Posts (DummyJSON)</Link>

		<Link to="/comments/jsonplaceholder">Comments (JSONPlaceholder)</Link>
		<Link to="/comments/dummyjson">Comments (DummyJSON)</Link>
	</nav>
);

export default Navigation;
