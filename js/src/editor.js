// Add the JS code to this file. On running npm run dev, it will compile to js/dist/.

import { registerBlockType } from '@wordpress/blocks';
import TableControl from './controls/table';

const blockStyle = {
	backgroundColor: '#900',
	color: '#fff',
	padding: '20px',
};

registerBlockType('gutenberg-examples/example-01-basic-esnext', {
	title: 'Example: Basic (esnext)',
	icon: 'universal-access-alt',
	category: 'layout',
	example: {},
	edit() {
		return (
			<div>
				<TableControl />
			</div>
		);
	},
	save() {
		return <div style={blockStyle}>Hello World, step 1 (from the frontend).</div>;
	},
});

export function add(to, howMuch) {
	return to + howMuch;
}
