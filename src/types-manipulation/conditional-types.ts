const aaa: number = Math.random() > 0.5 ? 1 : 0;

interface HTTPResponse<T extends 'success' | 'failed'> {
	code: number;
	data: T extends 'success' ? string : Error;
}

const success: HTTPResponse<'success'> = {
	code: 200,
	data: 'Success',
};

const err: HTTPResponse<'failed'> = {
	code: 200,
	data: new Error('Failed'),
};

class Userrr {
	id: number;
	name: string;
}

class UserrrPersistent extends Userrr {
	dbId: string;
}

function findUser<T>(dbId: string): UserrrPersistent;
function findUser<T>(id: number): Userrr;
function findUser<T>(dbIdOrId: T extends Userrr ? number : string): Userrr | UserrrPersistent {
	if (typeof dbIdOrId === 'string') {
		return new UserrrPersistent();
	} else {
		return new Userrr();
	}
}

const userrrr = findUser<UserrrPersistent>(5);

type UserOrUserPersistent<T extends string | number> = T extends string ? UserrrPersistent : Userrr;

function findUser2<T extends string | number>(id: T): UserOrUserPersistent<T> {
	return id === 'number' ? (new Userrr() as UserOrUserPersistent<T>) : new UserrrPersistent();
}

const userrrr2 = findUser2('asd');
