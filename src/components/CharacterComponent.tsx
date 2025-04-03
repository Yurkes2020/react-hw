import {ReactNode} from "react";
import {SimpsonType} from "../models/SimpsonType.tsx";

type CharacterComponentProps = {
	data: SimpsonType;
	children: ReactNode;
}

export const CharacterComponent = ({data, children}: CharacterComponentProps) => {
	return (
		<div className="flex border ">
			<img className="" src={data.photo} alt={data.name}/>
			<div className="flex flex-col justify-center">
				<p>{data.name} {data.surname} {data.age} years</p>
				<p>{children}</p>
			</div>

		</div>

	)
}