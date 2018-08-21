import { Item } from "./item";

export class Crate {
	constructor(
		public id: number,
		public label: String,
		public items: Array<Item>
	) {
	}
}
