interface IForm {
	name: string;
	password: string;
}

type FormValidation<T> = {
	[K in keyof T]: { isValid: true } | { isValid: false; errorMessage: string };
};

const form: IForm = {
	name: 'John',
	password: '123',
};

const formValidation: FormValidation<IForm> = {
	name: { isValid: true },
	password: { isValid: false, errorMessage: 'PW must be longer than 5' },
};
