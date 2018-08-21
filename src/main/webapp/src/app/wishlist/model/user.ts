import { Crate } from "./crate";

export class User {
	constructor(
		public id: number,
		public email: String,
		public crates: Array<Crate>
	){
	}
}
