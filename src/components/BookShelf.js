import React from "react";
import PropTypes from "prop-types";

import BooksGrid from "./BooksGrid";

const BookShelf = ({ header, books, updateBookShelve }) =>
	<div className="bookshelf">
		<h2 className="bookshelf-title">
			{header}
		</h2>
		<div className="bookshelf-books">
			<BooksGrid books={books} updateBookShelve={updateBookShelve} />
		</div>
	</div>;

BookShelf.propTypes = {
	header: PropTypes.string.isRequired,
	books: PropTypes.array.isRequired,
	updateBookShelve: PropTypes.func.isRequired
};

export default BookShelf;
