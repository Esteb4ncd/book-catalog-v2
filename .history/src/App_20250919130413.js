
import React, { useState } from "react";
import Book from "./components/Book";
import data from "./data/books.json"; // adjust path if needed
import "./App.css";

function App() {
  // load books.json into state
  const [books] = useState(data);

  return (
    <div className="app">
      <header className="header">
        <h1>📚 My Book Catalog V2</h1>
      </header>

      <main className="content">
        <div className="add-button-column">
          <button className="add-button">+ Add</button>
        </div>
        <div className="book-grid">
          {books.map((book) => (
            <Book key={book.isbn13} book={book} />
          ))}

          
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 My Book Catalog - V2</p>
      </footer>
    </div>
  );
}

export default App;
