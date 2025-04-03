import {Course} from "../course/Course.tsx";
import {coursesArray} from "../../data/data.tsx";

export const CoursesList = ()=> {
	return    <div className="min-h-screen bg-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
		{coursesArray.map((course, i) => <Course key={i} course={course} />)}
	</div>
}