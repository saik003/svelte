export default {
	html: '<div><p></p></div>',

	test ( assert, component, target ) {
		const widget = component.widget;

		assert.equal( widget.get().show, false );

		widget.set({show: true});
		assert.htmlEqual( target.innerHTML, '<div><p>Hello</p></div>' );

		component.data = 'World';
		assert.htmlEqual( target.innerHTML, '<div><p>World</p></div>' );

		widget.set({show: false});
		assert.htmlEqual( target.innerHTML, '<div><p></p></div>' );

		component.data = 'Goodbye';
		assert.htmlEqual( target.innerHTML, '<div><p></p></div>' );

		widget.set({show: true});
		assert.htmlEqual( target.innerHTML, '<div><p>Goodbye</p></div>' );
	}
};
