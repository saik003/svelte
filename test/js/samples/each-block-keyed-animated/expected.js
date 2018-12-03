/* generated by Svelte vX.Y.Z-alpha1 */
import { SvelteComponent as SvelteComponent_1, append, blankObject, createComment, createElement, createText, detachNode, fixAndOutroAndDestroyBlock, fixPosition, flush, init, insert, run, safe_not_equal, setData, updateKeyedEach, wrapAnimation } from "svelte/internal.js";

function foo(node, animation, params) {
	const dx = animation.from.left - animation.to.left;
	const dy = animation.from.top - animation.to.top;

	return {
		delay: params.delay,
		duration: 100,
		tick: (t, u) => {
			node.dx = u * dx;
			node.dy = u * dy;
		}
	};
}

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.thing = list[i];
	return child_ctx;
}

// (19:0) {#each things as thing (thing.id)}
function create_each_block(component, key_1, ctx) {
	var div, text_value = ctx.thing.name, text, rect, animation;

	return {
		key: key_1,

		first: null,

		c() {
			div = createElement("div");
			text = createText(text_value);
			this.first = div;
		},

		m(target, anchor) {
			insert(target, div, anchor);
			append(div, text);
		},

		p(changed, ctx) {
			if ((changed.things) && text_value !== (text_value = ctx.thing.name)) {
				setData(text, text_value);
			}
		},

		r() {
			rect = div.getBoundingClientRect();
		},

		f() {
			fixPosition(div);
			if (animation) animation.stop();
		},

		a() {
			if (animation) animation.stop();
			animation = wrapAnimation(div, rect, foo, {});
		},

		d(detach) {
			if (detach) {
				detachNode(div);
			}
		}
	};
}

function create_fragment(component, ctx) {
	var each_blocks_1 = [], each_lookup = blankObject(), each_anchor, current;

	var each_value = ctx.things;

	const get_key = ctx => ctx.thing.id;

	for (var i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_blocks_1[i] = each_lookup[key] = create_each_block(component, key, child_ctx);
	}

	return {
		c() {
			for (i = 0; i < each_blocks_1.length; i += 1) each_blocks_1[i].c();

			each_anchor = createComment();
		},

		m(target, anchor) {
			for (i = 0; i < each_blocks_1.length; i += 1) each_blocks_1[i].m(target, anchor);

			insert(target, each_anchor, anchor);
			current = true;
		},

		p(changed, ctx) {
			const each_value = ctx.things;
			for (let i = 0; i < each_blocks_1.length; i += 1) each_blocks_1[i].r();
			each_blocks_1 = updateKeyedEach(each_blocks_1, component, changed, get_key, 1, ctx, each_value, each_lookup, each_anchor.parentNode, fixAndOutroAndDestroyBlock, create_each_block, "m", each_anchor, get_each_context);
			for (let i = 0; i < each_blocks_1.length; i += 1) each_blocks_1[i].a();
		},

		i(target, anchor) {
			if (current) return;
			this.m(target, anchor);
		},

		o: run,

		d(detach) {
			for (i = 0; i < each_blocks_1.length; i += 1) each_blocks_1[i].d(detach);

			if (detach) {
				detachNode(each_anchor);
			}
		}
	};
}

function define($$self, $$props) {
	let { things } = $$props;

	// TODO only what's needed by the template
	$$self.$$.get = () => ({ things });

	$$self.$$.set = $$props => {
		if ('things' in $$props) things = $$props.things;
	};
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, define, create_fragment, safe_not_equal);
	}

	get things() {
		return this.$$.get().things;
	}

	set things(value) {
		this.$set({ things: value });
		flush();
	}
}

export default SvelteComponent;