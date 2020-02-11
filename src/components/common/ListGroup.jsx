import React from "react";

export default function ListGroup(props) {
    const { items, valueProperty, textProperty, selectedItem } = props;
    return (
        <ul className="list-group">
            {items.map(genre => {
                return (
                    <li
                        key={genre[valueProperty]}
                        className={
                            genre === selectedItem
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        onClick={() => props.onItemSelect(genre)}
                    >
                        {genre[textProperty]}
                    </li>
                );
            })}
        </ul>
    );
}

ListGroup.defaultProps = { textProperty: "name", valueProperty: "_id" };
