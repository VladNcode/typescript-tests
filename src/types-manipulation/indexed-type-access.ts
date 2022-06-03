interface Role {
	name: string;
}

interface Permission {
	endDate: Date;
}

interface Userr {
	name: string;
	roles: Role[];
	permission: Permission;
}

const userr2: Userr = { name: 'John', roles: [], permission: { endDate: new Date() } };

const userNamee = user['name'];

type rolesType = Userr['roles'];
type DateType = Userr['permission']['endDate'];

const roleNames = 'roles';
type rolesType2 = Userr[typeof roleNames];
// type roleTypes2 = Userr[roleNames]; // Error

type roleType = Userr['roles'][number];

const roles = ['admin', 'user', 'super-user'];
// let roles: readonly ['admin', 'user', 'super-user'];
type roleTypes = typeof roles[number];
