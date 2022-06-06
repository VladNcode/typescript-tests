interface PaymentPersistent {
	id: number;
	sum: number;
	from: string;
	to: string;
}

type Paym = Omit<PaymentPersistent, 'id'>;
type Paym2 = Pick<PaymentPersistent, 'from' | 'to'>;
type Paym3<T, K extends keyof T> = {
	[P in K]: T[P];
};
type Paym4 = Paym3<PaymentPersistent, 'from' | 'to'>;

type ExtractEx = Extract<'from' | 'to' | Paym, string>;
type ExcludeEx = Exclude<'from' | 'to' | Paym, string>;
