import { Category } from "./category";
import { Store } from "./store";
import { Tag } from "./tag";
import { Priority } from "./priority";

export class Item {
	constructor(
		//По ним можно искать
		public id:number,
		public name: String,
		public url: String,
		//По ним можно фильтровать
		public price: number,
		public frankness: String,
		public priority: Priority,
		public category: Category,
		public store: Store,
		public tags: Array<Tag>,
		//Декор
		public img: String,
	) {

	}
}
