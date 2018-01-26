import { Character } from './character';

export class PeopleResponse {
    count: number;
    next: string;
    previous: string;
    results: Character[];
}