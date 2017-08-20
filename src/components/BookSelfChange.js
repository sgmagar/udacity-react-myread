import React from "react";
import PropTypes from "prop-types";

const BookSelfChange = ({ book, updateBookShelve }) =>
	<select
		value={book.shelf || "none"}
		onChange={event => updateBookShelve(book, event.target.value)}
	>
		<option value="non" disabled>
			Move to...
		</option>
		<option value="currentlyReading">Currently Reading</option>
		<option value="wantToRead">Want to Read</option>
		<option value="read">Read</option>
		<option value="none">None</option>
	</select>;

BookSelfChange.propTypes = {
	book: PropTypes.object.isRequired,
	updateBookShelve: PropTypes.func.isRequired
};

export default BookSelfChange;
