import { Film } from "./film";
import { Specie } from "./specie";
import { Vehicle } from "./vehicle";
import { Starship } from "./starship";

export class Character {
    name: string;
	height: number;
	mass: number;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: Film[];
	species: Specie[];
	vehicles: Vehicle[];
	starships: Starship[];
	created: string;
	edited: string;
	url: string;
}