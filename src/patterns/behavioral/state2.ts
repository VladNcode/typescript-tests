class DocumentItem {
	public text: string;
	private state: DocumentItemState;
	constructor() {
		this.setState(new DraftDocumentItemState());
	}
	setState(state: DocumentItemState): void {
		this.state = state;
		this.state.setContext(this); //Привязали документ чтобы item знал к какому документу относиться
	}
	getState(): DocumentItemState {
		return this.state;
	}
	publishDoc(): void {
		this.state.publish();
	}
	deleteDoc(): void {
		this.state.delete();
	}
}

abstract class DocumentItemState {
	public name: string;
	public item: DocumentItem;

	public setContext(item: DocumentItem): void {
		this.item = item;
	}
	public abstract publish(): void;
	public abstract delete(): void;
}

class DraftDocumentItemState extends DocumentItemState {
	constructor() {
		super();
		this.name = 'DraftDocument';
	}
	public publish(): void {
		console.log(`Text send to site ${this.item.text}`);
		this.item.setState(new PublishDocumentItemState());
	}
	public delete(): void {
		console.log('State draft delete');
	}
}
class PublishDocumentItemState extends DocumentItemState {
	constructor() {
		super();
		this.name = 'PublishDocument';
	}
	public publish(): void {
		console.log('Sorry, You can not make it , that was done', 1);
	}
	public delete(): void {
		console.log('Return to draft');
		this.item.setState(new DraftDocumentItemState());
	}
}

const item = new DocumentItem();

item.text = ' Any text ';
console.log(item.getState());
item.publishDoc();
console.log(item.getState());
item.publishDoc();
item.deleteDoc();
console.log(item.getState());
