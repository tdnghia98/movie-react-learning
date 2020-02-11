import PropTypes from "prop-types";
import React from "react";
import _ from "lodash";

export default function Pagination(props) {
    const { itemsCount, pageSize, currentPage } = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    // +1 because range does not include the end number
    const pages = _.range(1, pageCount + 1);

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination">
                <li className="page-item disabled">
                    <a className="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>

                {pages.map(page => {
                    return (
                        <li
                            key={page}
                            className={
                                page === currentPage
                                    ? "page-item active"
                                    : "page-item"
                            }
                            onClick={() => props.onPageChange(page)}
                        >
                            <a
                                className="page-link"
                                style={{ cursor: "pointer" }}
                            >
                                {page}
                            </a>
                        </li>
                    );
                })}

                <li className="page-item">
                    <a className="page-link" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired
};
