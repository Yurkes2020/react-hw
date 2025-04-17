import {Outlet} from "react-router-dom";
import {Navigation} from "../navigation/Navigation.tsx";

export function Layout() {
	return (<>
		<Navigation/>
		<Outlet/>
	</>)
}


