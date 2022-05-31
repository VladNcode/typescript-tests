class UserService {
	static db: any;

	static getUser(id: number) {
		return this.db.findById(id);
	}

	static getUsers() {
		return UserService.db.findMany();
	}

	static {
		UserService.db = 'test';
	}
}
