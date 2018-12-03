/* generated by Svelte vX.Y.Z-alpha1 */
import { SvelteComponent as SvelteComponent_1, createComment, createElement, detachNode, flush, init, insert, run, safe_not_equal } from "svelte/internal.js";

// (1:0) {#if foo}
function create_if_block(component, ctx) {
	var p;

	return {
		c() {
			p = createElement("p");
			p.textContent = "foo!";
		},

		m(target, anchor) {
			insert(target, p, anchor);
		},

		d(detach) {
			if (detach) {
				detachNode(p);
			}
		}
	};
}

function create_fragment(component, ctx) {
	var if_block_anchor, current;

	var if_block = (ctx.foo) && create_if_block(component, ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},

		p(changed, ctx) {
			if (ctx.foo) {
				if (!if_block) {
					if_block = create_if_block(component, ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},

		i(target, anchor) {
			if (current) return;
			this.m(target, anchor);
		},

		o: run,

		d(detach) {
			if (if_block) if_block.d(detach);
			if (detach) {
				detachNode(if_block_anchor);
			}
		}
	};
}

function define($$self, $$props) {
	let { foo } = $$props;

	$$self.$$.get = () => ({ foo });

	$$self.$$.set = $$props => {
		if ('foo' in $$props) foo = $$props.foo;
	};
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
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