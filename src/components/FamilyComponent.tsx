import {CharacterComponent} from "./CharacterComponent.tsx";
import {simpsons} from "../data/data.tsx";

export const FamilyComponent = () => {
	return <div className="">
		{simpsons.map((simpson, index) => <CharacterComponent data={simpson} key={index}>{simpson.info}</CharacterComponent>)}
	</div>
}