import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const BooksGrid = ({ books, updateBookShelve }) =>
	<ol className="books-grid">
		{books.map((book, index) =>
			<Book book={book} key={index} updateBookShelve={updateBookShelve} />
		)}
	</ol>;

BooksGrid.propTypes = {
	books: PropTypes.array.isRequired,
	updateBookShelve: PropTypes.func.isRequired
};

export default BooksGrid;
