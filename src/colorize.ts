export const colorize = (...args: any) => ({
	black: `\x1b[30m${args.join(' ')}\x1b[0m`,
	red: `\x1b[31m${args.join(' ')}\x1b[0m`,
	green: `\x1b[32m${args.join(' ')}\x1b[0m`,
	yellow: `\x1b[33m${args.join(' ')}\x1b[0m`,
	blue: `\x1b[34m${args.join(' ')}\x1b[0m`,
	magenta: `\x1b[35m${args.join(' ')}\x1b[0m`,
	cyan: `\x1b[36m${args.join(' ')}\x1b[0m`,
	white: `\x1b[37m${args.join(' ')}\x1b[0m`,
	bgBlack: `\x1b[40m${args.join(' ')}\x1b[0m`,
	bgRed: `\x1b[41m${args.join(' ')}\x1b[0m`,
	bgGreen: `\x1b[42m${args.join(' ')}\x1b[0m`,
	bgYellow: `\x1b[43m${args.join(' ')}\x1b[0m`,
	bgBlue: `\x1b[44m${args.join(' ')}\x1b[0m`,
	bgMagenta: `\x1b[45m${args.join(' ')}\x1b[0m`,
	bgCyan: `\x1b[46m${args.join(' ')}\x1b[0m`,
	bgWhite: `\x1b[47m${args.join(' ')}\x1b[0m`,
});

export const col = {
	black: (...args: any) => `\x1b[40m${`\x1b[30m${args.join(' ')}`}\x1b[0m`,
	red: (...args: any) => `\x1b[41m${`\x1b[30m${args.join(' ')}`}\x1b[0m`,
	green: (...args: any) => `\x1b[42m${`\x1b[30m${args.join(' ')}`}\x1b[0m`,
	yellow: (...args: any) => `\x1b[43m${`\x1b[30m${args.join(' ')}`}\x1b[0m`,
	blue: (...args: any) => `\x1b[44m${`\x1b[30m${args.join(' ')}`}\x1b[0m`,
	magenta: (...args: any) => `\x1b[45m${`\x1b[30m${args.join(' ')}`}\x1b[0m`,
	cyan: (...args: any) => `\x1b[46m${`\x1b[30m${args.join(' ')}`}\x1b[0m`,
	white: (...args: any) => `\x1b[47m${`\x1b[30m${args.join(' ')}`}\x1b[0m`,
};

console.log(colorize('Hello').green);
console.log('hello 2');
