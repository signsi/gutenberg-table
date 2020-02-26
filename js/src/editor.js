// Add the JS code to this file. On running npm run dev, it will compile to js/dist/.

import { registerBlockType } from '@wordpress/blocks';
import TableControl from './controls/table';
import Plots from './controls/table2';
import { RichText } from '@wordpress/block-editor';

const initData = {
	cols: [
		{ key: "bezeichnung", name: "Bezeichnung", editable: false },
		{ key: 2016, name: 2016, editable: true },
		{ key: 2017, name: 2017, editable: true },
		{ key: 2018, name: 2018, editable: true },
		{ key: 2019, name: 2019, editable: true },
	],

	rows: [
		{
			bezeichnung: "Mitarbeitende",
			2016: 204,
			2017: 218,
			2018: 228,
			2019: 332
		},
		{
			bezeichnung: "Vollzeitäquivalente",
			2016: 100,
			2017: 110,
			2018: 115,
			2019: 120
		},
		{
			bezeichnung: "Fluktuationsrate",
			2016: 14.49,
			2017: 16.51,
			2018: 19.74,
			2019: 15.4
		},
	]
}

const blockStyle = {
	backgroundColor: '#900',
	color: '#fff',
	padding: '20px',
};

registerBlockType('gutenberg-examples/example-01-basic-esnext', {
	title: 'Graph #1',
	icon: 'chart-line',
	category: 'layout',
	attributes: {
		data: {
			type: 'object',
			default: initData
		},
	},
	edit(props) {
		const { attributes: { data }, setAttributes, className } = props;
		const onChange = (newContent) => {
			setAttributes({ data: newContent });
		};
		return (
			<div>
				<TableControl onChange={onChange} data={data} />
			</div>
		);
	},
	save(props) {
		return (
			<div className={"plots"}>
				<h1>Rendering</h1>
				<Plots data={props.attributes.data} style={{ position: "relative" }} />
			</div>
		);
	},
});

registerBlockType('gutenberg-examples/example-03-editable-esnext', {
	title: 'Example: Editable (esnext)',
	icon: 'universal-access-alt',
	category: 'layout',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
	example: {
		attributes: {
			content: 'Hello World',
		},
	},
	edit: (props) => {
		const { attributes: { content }, setAttributes, className } = props;
		const onChangeContent = (newContent) => {
			setAttributes({ content: newContent });
		};
		return (
			<RichText
				tagName="p"
				className={className}
				onChange={onChangeContent}
				value={content}
			/>
		);
	},
	save: (props) => {
		return <RichText.Content tagName="p" value={props.attributes.content} />;
	},
});

export function add(to, howMuch) {
	return to + howMuch;
}
