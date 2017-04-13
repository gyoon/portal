import React, { Component } from 'react';
import { Link } from 'react-router';
import './projects.scss';

import ReactDataGrid from 'react-data-grid';
const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons');

export default class Projects extends Component {

	constructor() {
		super();
        this._columns = [
            {
                key: 'id',
                name: 'ID',
                filterable: true,
                sortable: true
            },
            {
                key: 'title',
                name: 'Title',
                filterable: true,
                sortable: true
            },
            {
                key: 'count',
                name: 'Count',
                filterable: true,
                sortable: true
            }];

        this.state = {
            rows: this.createRows(),
            originalRows: this.createRows(),
            filters: {}
        };
	}


    createRows() {
        let rows = [];
        rows.push(
            {
                id: 1,
                title: 'Title ' + 1,
                count: 10
            },
            {
                id: 3,
                title: 'Title ' + 3,
                count: 30
            },
            {
                id: 2,
                title: 'Title ' + 2,
                count: 20
            }
        );

        return rows;
    }

    getRows() {
        return Selectors.getRows(this.state);
    }

    getSize() {
        return this.getRows().length;
    }

    onRowClick(rowIdx, row) {
        console.log(row)
    }

	render(){

        const rowGetter = (rowIdx) => {
            const rows = this.getRows();
            return rows[rowIdx];
            //return this.state.rows[i];
        };

        const handleFilterChange = (filter) => {
            let newFilters = Object.assign({}, this.state.filters);
            if (filter.filterTerm) {
                newFilters[filter.column.key] = filter;
            } else {
                delete newFilters[filter.column.key];
            }

            this.setState({ filters: newFilters });
        };

        const onClearFilters = () => {
            this.setState({ filters: {} });
        };

        const handleGridSort = (sortColumn, sortDirection) => {
            const comparer = (a, b) => {
                if (sortDirection === 'ASC') {
                    return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
                } else if (sortDirection === 'DESC') {
                    return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
                }
            };

            let originalRows = this.state.originalRows.slice(0);
            const rows = sortDirection === 'NONE' ? originalRows : this.state.rows.sort(comparer);

            this.setState({ rows });
        };

		return(
            <ReactDataGrid
                onGridSort={handleGridSort}
                enableCellSelect={true}
                columns={this._columns}
                rowGetter={rowGetter}
                rowsCount={this.getSize()}
                //rowsCount={this.state.rows.length}
                minHeight={500}
                toolbar={<Toolbar enableFilter={true}/>}
                onAddFilter={handleFilterChange}
                onClearFilters={onClearFilters}
                onRowClick={this.onRowClick}
            />
		);
	}
}
