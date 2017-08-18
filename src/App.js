import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import MyReadsPage from './components/MyReadsPage'
import SearchPage from './components/SearchPage'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    bookShelve: []
    
  }

  componentDidMount() {
    BooksAPI.getAll().then((bookShelve) => {
      this.setState({ bookShelve })
      console.log(bookShelve)
    })
  }

  searchBook = (query) => {
    BooksAPI.search(query, 20).then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage 
            books = { this.state.books }
            searchBook={(query) => {
              this.searchBook(query)
            }} 
          />
        ) : (
          <MyReadsPage />
        )}
      </div>
    )
  }
}

export default BooksApp
