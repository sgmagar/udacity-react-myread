import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import BooksGrid from './BooksGrid'

class MyReadsPage extends Component {
	static propTypes = {
		bookShelve: PropTypes.array.isRequired,
		updateBookShelve: PropTypes.func.isRequired,
	}

	render () {
		const { bookShelve, updateBookShelve } = this.props
		const read = bookShelve.filter((book) => book.shelf === 'read')
		const currentlyReading = bookShelve.filter((book) => book.shelf === 'currentlyReading')
		const wantToRead = bookShelve.filter((book) => book.shelf === 'wantToRead')
		return (
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
	              <div>
	                <div className="bookshelf">
	                  <h2 className="bookshelf-title">Currently Reading</h2>
	                  <div className="bookshelf-books">
	                   <BooksGrid books={ currentlyReading } updateBookShelve={ updateBookShelve } />
	                  </div>
	                </div>
	                <div className="bookshelf">
	                  <h2 className="bookshelf-title">Want to Read</h2>
	                  <div className="bookshelf-books">
	                    <BooksGrid books={ wantToRead } updateBookShelve={ updateBookShelve } />
	                  </div>
	                </div>
	                <div className="bookshelf">
	                  <h2 className="bookshelf-title">Read</h2>
	                  <div className="bookshelf-books">
	                   <BooksGrid books={ read } updateBookShelve={ updateBookShelve } />
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div className="open-search">
	              <Link to='/search'>Add a book</Link>
	            </div>
	        </div>	
		)
	}
}

export default MyReadsPage