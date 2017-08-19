import React, { Component } from "react"
import PropTypes from "prop-types"

class BookSelfChange extends Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
		updateBookShelve: PropTypes.func.isRequired
	}

	render () {
		const {book, updateBookShelve } = this.props

		return (
			<select onChange={(event) => updateBookShelve(book, event.target.value)}>
				<option value="none" disabled>Move to...</option>
				<option value="currentlyReading">
					{book.shelf === "currentlyReading" ? "✓" : ""} Currently Reading
				</option>
				<option value="wantToRead">
					{book.shelf === "wantToRead" ? "✓" : ""} Want to Read
				</option>
				<option value="read">
					{book.shelf === "read" ? "✓" : ""} Read
				</option>
				<option value="none">&nbsp;&nbsp;None</option>
			</select>
		)
	}
}

export default BookSelfChange