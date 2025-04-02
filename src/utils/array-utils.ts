/**
 * Convert anything into an array
 */
export const makeArray = (a: any) => {
	if (Array.isArray(a)) {
		return a;
	}

	if (a === undefined || a === null) {
		return [];
	}

	return [a];
};
