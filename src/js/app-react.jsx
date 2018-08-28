import React from 'react';
import ReactDOM from 'react-dom';
import PanelItem from './react-components/PanelItem';
import DataTable from './react-components/DataTable';

const dtItems = {
    url: base_url+'welcome/data',
    header: ['#','Category','Name','Price','Stock']
};

const dataitems = {
    title: "React in action...",
    body: <React.Fragment><p><b>ini adalah body panel</b></p><DataTable /></React.Fragment>,
    footer: "ini adalah footer react"
};
const el = <PanelItem dataItems={dataitems} />;

ReactDOM.render(el,document.getElementById('root'));