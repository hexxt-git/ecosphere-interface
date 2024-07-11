export const paths = {
  "i": "image"
}

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
	return /^(i)+$/.test(param);
}

