export class Category {
	constructor(
		public id: number,
		public name: String,
		public parrent: Category | null
	) {

	}
}