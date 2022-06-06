type Modifier = 'read' | 'update' | 'create';

type UserRoles = {
	customers?: Modifier;
	projects?: Modifier;
	adminPanel?: Modifier;
	test: Modifier;
};

type ModifierToAccess<T> = {
	+readonly [Property in keyof T as Exclude<
		`canAccess${string & Property}`,
		'canAccesstest'
	>]-?: boolean;
};

type UserAccess2 = ModifierToAccess<UserRoles>;

type UserAccess1 = {
	customers?: boolean;
	projects?: boolean;
	adminPanel?: boolean;
};
