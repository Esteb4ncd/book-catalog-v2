import React from "react";

export default function Book({ book }) {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.authors}</p>
      <p>{book.price}</p>
      <a href={book.url} target="_blank" rel="noopener noreferrer" classname="">
        View Details
      </a>
    </div>
  );
}
