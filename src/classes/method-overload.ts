class User2 {
	skills: string[] = [];

	addSkill(data: string): string[];
	addSkill(data: string[]): string[];
	addSkill(data: string | string[]): string[] {
		if (Array.isArray(data)) {
			this.skills.push(...data);
		} else {
			this.skills.push(data);
		}

		return this.skills;
	}
}

const user5 = new User2();
user5.addSkill(['123', '456']);
user5.addSkill('789');

console.log(user5);

function run(distance: number): number;
function run(distance: string): string;
function run(distance: number | string): number | string {
	if (typeof distance === 'string') {
		return 'string';
	}

	return 5;
}
