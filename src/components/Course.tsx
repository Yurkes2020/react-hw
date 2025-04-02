import {FC} from "react";

type CourseProps = {
	title: string;
}

export const Course: FC<CourseProps> = ({title}) => {
	return (
		<li className="text-2xl text-emerald-300">{title}</li>
	);
};


