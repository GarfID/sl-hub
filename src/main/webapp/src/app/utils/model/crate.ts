import { ShortUser } from "./short-user";

export class Crate {

	public id: number;
	public label: String;
	public isOwning: boolean;
	public users: Array<ShortUser>;

	constructor() {}
}