import React, { Component } from "react";

export default class TableHeader extends Component {
    raiseSort = path => {
        const sortedColumn = { ...this.props.sortedColumn };
        if (sortedColumn.path === path) {
            sortedColumn.order = sortedColumn.order === "asc" ? "desc" : "asc";
        } else {
            sortedColumn.path = path;
            sortedColumn.order = "asc";
        }

        this.props.onSort(sortedColumn);
    };

    renderSortIcon = column => {
        const { sortedColumn } = this.props;
        if (sortedColumn.path !== column.path) return null;
        if (sortedColumn.order === "asc")
            return <i className="fa fa-sort-asc" aria-hidden="true"></i>;
        return <i className="fa fa-sort-desc" aria-hidden="true"></i>;
    };

    render() {
        const { columns } = this.props;
        return (
            <thead>
                <tr>
                    {columns.map(column => (
                        <th
                            className="clickable"
                            key={column.path || column.key}
                            onClick={() => this.raiseSort(column.path)}
                        >
                            {column.label}
                            {this.renderSortIcon(column)}
                        </th>
                    ))}
                </tr>
            </thead>
        );
    }
}
