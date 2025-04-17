import { NavLink } from 'react-router-dom';
import {ReactNode} from "react";

type ActiveLinkProps  = {
	to: string;
	children: ReactNode;
}

export function ActiveLink({ to, children }: ActiveLinkProps) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive ? 'underline text-green-600' : 'text-black'
			}
		>
			{children}
		</NavLink>
	);
}
