import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div>
            <nav className="p-4 bg-gray-200 space-x-4">
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/comments">Comments</Link>
                <Link to="/products">Products</Link>
            </nav>
            <main className="p-4">
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;
