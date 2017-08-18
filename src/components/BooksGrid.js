import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BooksGrid extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		updateBookShelve: PropTypes.func.isRequired
	}

	render() {
		const { books, updateBookShelve } = this.props
		return (
			<ol className="books-grid">
             	{books.map((book, index) => (
             		<Book book={ book } key={ index } updateBookShelve={ updateBookShelve }/>
             	))}
            </ol>
		)
	}
}

export default BooksGrid