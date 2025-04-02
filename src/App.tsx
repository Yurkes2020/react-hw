import {coursesTitleArray} from "./data/data.ts";
import {CourseList} from "./components/CourseList.tsx";


function App() {
	return (
			<CourseList courses={coursesTitleArray}/>
	)
}

export default App
