import Navigation from "./navigation/Navigation.tsx";
import {Outlet} from "react-router-dom";

export function Layout() {
	return (<>
		<Navigation/>
		<Outlet/>
	</>)
}


