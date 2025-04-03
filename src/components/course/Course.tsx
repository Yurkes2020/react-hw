import {CourseType} from "../../model/CoursType.tsx";

type CoursePropsType = {
	course: CourseType,
}


export const Course = ({course}: CoursePropsType)=> {
	return <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 h-full flex flex-col">
		<h2 className="text-2xl font-bold text-gray-800 mb-3">{course.title}</h2>
		<p className="text-gray-600 text-sm mb-4">⏳ {course.monthDuration} months | ⏰ {course.hourDuration} hours</p>
		<h3 className="text-lg font-semibold text-gray-700 mb-2">📚 Що вивчимо:</h3>
		<ul className="list-inside text-gray-600 flex-grow">
			{course.modules.map((item, i)=>(<li className="text-center" key={i}>{item}</li>))}
		</ul>
	</div>
}