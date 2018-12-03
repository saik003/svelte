/* generated by Svelte vX.Y.Z-alpha1 */
import { SvelteComponent as SvelteComponent_1, callAfter, createText, detachNode, init, insert, mount_component, noop, safe_not_equal } from "svelte/internal.js";
import Imported from "Imported.html";

function create_fragment(component, ctx) {
	var text, current;

	var imported = new Imported({});

	var nonimported = new NonImported({});

	return {
		c() {
			imported.$$.fragment.c();
			text = createText("\n");
			nonimported.$$.fragment.c();
		},

		m(target, anchor) {
			mount_component(imported, target, anchor);
			insert(target, text, anchor);
			mount_component(nonimported, target, anchor);
			current = true;
		},

		p: noop,

		i(target, anchor) {
			if (current) return;
			this.m(target, anchor);
		},

		o(outrocallback) {
			if (!current) return;

			outrocallback = callAfter(outrocallback, 2);

			if (imported) imported.$$.fragment.o(outrocallback);
			if (nonimported) nonimported.$$.fragment.o(outrocallback);
			current = false;
		},

		d(detach) {
			imported.$destroy(detach);

			if (detach) {
				detachNode(text);
			}

			nonimported.$destroy(detach);
		}
	};
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, noop, create_fragment, safe_not_equal);
	}
}

export default SvelteComponent;