import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import BooksGrid from './BooksGrid'

class SearchPage extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		searchBook: PropTypes.func.isRequired,
		updateBookShelve: PropTypes.func.isRequired,
	}

	state ={
		query: ''
	}

	updateQuery = (query) => {
		this.setState({query: query})
		this.props.searchBook(query)
	}

	render () {
		const { books, updateBookShelve } = this.props
		const { query } = this.state
		return (
			<div className="search-books">
	            <div className="search-books-bar">
	            	<Link to='/' className='close-search'>Close</Link>
					<div className="search-books-input-wrapper">
						<input 
							type="text" 
							placeholder="Search by title or author"
							value={query}
							onChange={(event) => this.updateQuery(event.target.value)}
						/>
					</div>
	            </div>
	            <div className="search-books-results">
	            	<BooksGrid books={ books } updateBookShelve={ updateBookShelve } />
	            </div>
          </div>
		)
	}
}

export default SearchPage