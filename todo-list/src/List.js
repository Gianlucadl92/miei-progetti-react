import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(id)}
              >
                <FaEdit color="#25bb32" />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id)}
              >
                <FaTrash color="#bb2525" />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
