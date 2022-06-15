class UserY {
	githubToken: string;
	jwtToken: string;
}

interface AuthStrategy {
	auth(user: UserY): boolean;
}

class Auth {
	constructor(private strategy: AuthStrategy) {}

	setStrategy(strategy: AuthStrategy) {
		this.strategy = strategy;
	}

	public authUser(user: UserY): boolean {
		return this.strategy.auth(user);
	}
}

class JWTStrategy implements AuthStrategy {
	auth(user: UserY): boolean {
		if (user.jwtToken) return true;
		return false;
	}
}

class GitHubStrategy implements AuthStrategy {
	auth(user: UserY): boolean {
		if (user.githubToken) {
			// go to API to get user ...
			return true;
		}

		return false;
	}
}

const user = new UserY();
user.jwtToken = 'token';

const auth = new Auth(new JWTStrategy());
console.log(auth.authUser(user));
auth.setStrategy(new GitHubStrategy());
console.log(auth.authUser(user));
