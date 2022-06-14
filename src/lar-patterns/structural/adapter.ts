class KVDatabase {
	private db: Map<string, string> = new Map();
	save(key: string, value: string) {
		this.db.set(key, value);
	}
}

class PersistentDatabase {
	savePersistent(data: Object) {
		console.log('PersistentDatabase ->', data);
	}
}

class PersistentDatabaseAdapter extends KVDatabase {
	constructor(public databese: PersistentDatabase) {
		super();
	}

	override save(key: string, value: string) {
		this.databese.savePersistent({ key, value });
	}
}

function run(base: KVDatabase) {
	base.save('key', 'value');
}

run(new PersistentDatabaseAdapter(new PersistentDatabase()));
