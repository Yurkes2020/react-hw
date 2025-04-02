import './App.css'
import {coursesAndDurationArray} from "./data/data.tsx";

function App() {
	return (<>
		{coursesAndDurationArray.map(({title, monthDuration}, i) => {
			return (<div className="flex gap-2 justify-center" key={i}>
				<h2 className="text-blue-300 ">{title}</h2>
				<p className="text-green-300 ">{monthDuration} months</p>
			</div>)
		})}
	</>)
}

export default App
