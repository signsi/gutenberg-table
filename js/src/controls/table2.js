/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import React from "react";
import BasicPlot from '../components/BasicPlot';

/**
 * Internal dependencies
 */

const colData = [
    { key: "bezeichnung", name: "Bezeichnung", editable: false },
    { key: 2016, name: 2016, editable: true },
    { key: 2017, name: 2017, editable: true },
    { key: 2018, name: 2018, editable: true },
    { key: 2019, name: 2019, editable: true },
];

const rowsData = [
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
];

const Plots = (props) => {
    //const { field, getValue, instanceId, onChange, parentBlockProps, rowIndex } = props;

    const { rows, cols } = props.data


    return (
        <div className={"root"}>
            <div className={"plots"}>
                <BasicPlot row={rows[0]} columns={cols} />
                <BasicPlot row={rows[1]} columns={cols} />
                <BasicPlot row={rows[2]} columns={cols} />
            </div>
        </div>
    );
};

export default Plots;