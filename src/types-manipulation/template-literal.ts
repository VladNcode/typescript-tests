type ReadOrWrite = 'read' | 'write';
type Bulk = 'bulk' | '';

type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`;

type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;

type T = ReadOrWriteBulk<Access>;

// <---------------------------------------------------------->

type ErrorOrSuccess = 'error' | 'success';

type RespType = {
	result: `HTTP${Capitalize<ErrorOrSuccess>}`;
};

const aaaa: RespType = {
	result: 'HTTPSuccess',
};
