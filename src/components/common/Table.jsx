import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

export default function Table({ columns, onSort, sortedColumn, data }) {
    return (
        <table className="table">
            <TableHeader
                columns={columns}
                onSort={onSort}
                sortedColumn={sortedColumn}
            ></TableHeader>
            <TableBody data={data} columns={columns}></TableBody>
        </table>
    );
}
