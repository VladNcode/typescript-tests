class User3 {
	private login: string;
	private password: string;

	get userLogin() {
		return this.login;
	}

	set userLogin(login: string) {
		this.login = `user-${login}`;
	}

	set userPassword(password: string) {
		// only synchronous methods
	}
}

const vasya = new User3();

vasya.userLogin = 'vasya';

console.log(vasya.userLogin);
