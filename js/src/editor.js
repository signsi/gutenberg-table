// Add the JS code to this file. On running npm run dev, it will compile to js/dist/.

import { registerBlockType } from '@wordpress/blocks';
import TableControl from './controls/table';
import Plots from './controls/table2';

const blockStyle = {
	backgroundColor: '#900',
	color: '#fff',
	padding: '20px',
};

registerBlockType('gutenberg-examples/example-01-basic-esnext', {
	title: 'Graph #1',
	icon: 'chart-line',
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
		return (
			<div className={"plots"}>
				<Plots style={{ position: "relative" }} />
			</div>
		);
	},
});

export function add(to, howMuch) {
	return to + howMuch;
}
