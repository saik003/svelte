/* generated by Svelte vX.Y.Z-alpha1 */
import { SvelteComponent as SvelteComponent_1, init, noop, run, safe_not_equal } from "svelte/internal.js";

const SOME_CONSTANT = 42;

function foo(bar) {
	console.log(bar);
}

function create_fragment(component, ctx) {
	return {
		c: noop,
		m: noop,
		p: noop,
		i: noop,
		o: run,
		d: noop
	};
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, define, create_fragment, safe_not_equal);
	}

	get foo() {
		return foo;
	}
}

export default SvelteComponent;
export { SOME_CONSTANT };