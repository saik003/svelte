/* generated by Svelte vX.Y.Z-alpha1 */
import { SvelteComponent as SvelteComponent_1, append, createElement, createText, detachNode, flush, init, insert, run, safe_not_equal, setData } from "svelte/internal.js";

function add_css() {
	var style = createElement("style");
	style.id = 'svelte-1a7i8ec-style';
	style.textContent = "p.svelte-1a7i8ec{color:red}";
	append(document.head, style);
}

function create_fragment(component, ctx) {
	var p, text, current;

	return {
		c() {
			p = createElement("p");
			text = createText(ctx.foo);
			p.className = "svelte-1a7i8ec";
		},

		m(target, anchor) {
			insert(target, p, anchor);
			append(p, text);
			current = true;
		},

		p(changed, ctx) {
			if (changed.foo) {
				setData(text, ctx.foo);
			}
		},

		i(target, anchor) {
			if (current) return;

			this.m(target, anchor);
		},

		o: run,

		d(detach) {
			if (detach) {
				detachNode(p);
			}
		}
	};
}

function define($$self, $$props) {
	let { foo = 42 } = $$props;

	$$self.$$.get = () => ({ foo });

	$$self.$$.set = $$props => {
		if ('foo' in $$props) foo = $$props.foo;
	};
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-1a7i8ec-style")) add_css();
		init(this, options, define, create_fragment, safe_not_equal);
	}

	get foo() {
		return this.$$.get().foo;
	}

	set foo(value) {
		this.$set({ foo: value });
		flush();
	}
}

export default SvelteComponent;