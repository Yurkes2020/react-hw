import {FC} from "react";
import {Course} from "./Course";

type CourseListProps ={
	courses: string[];
}

export const CourseList: FC<CourseListProps> = ({ courses }) => {
	return (
		<ul className="flex flex-col items-center">
			{courses.map((course, index) => (
				<Course key={index} title={course} />
			))}
		</ul>
	);
};


