import React, { Component } from 'react'

import Book from './Book'

class BooksGrid extends Component {

	render() {
		const { books } = this.props
		return (
			<ol className="books-grid">
             	{books.map((book, index) => (
             		<Book book={ book } key={ index }/>
             	))}
            </ol>
		)
	}
}

export default BooksGrid