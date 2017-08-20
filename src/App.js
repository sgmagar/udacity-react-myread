import React from "react"
import { Route } from "react-router-dom"

import * as BooksAPI from "./BooksAPI"
import "./App.css"

import MyReadsPage from "./components/MyReadsPage"
import SearchPage from "./components/SearchPage"

class BooksApp extends React.Component {
    state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we"re on, use the URL in the browser"s address bar. This will ensure that
     * users can use the browser"s back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
        books: [],
        bookShelve: []

    }

    componentDidMount() {
        this.getBookShelve()
    }

    getBookShelve = () => {
        BooksAPI.getAll().then((bookShelve) => {
            this.setState({ bookShelve })
        })
    }

    searchBook = (query) => {
        BooksAPI.search(query, 20).then((books) => {
            if (!Array.isArray(books)) 
                books = []
            let bookShelve = this.state.bookShelve
            books.map((book) => {
                let _book = bookShelve.find(item => item.id === book.id)
                if (_book)                    
                    book.shelf = _book.shelf
                return book
            })
            this.setState({ books })
        })
    }

    updateBookShelve = (book, shelf) => {
        BooksAPI.update(book, shelf).then((response)=>{
            this.getBookShelve()
        })
    }

    clearSearchPage = () => {
        this.setState({books: []})
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <MyReadsPage 
                        bookShelve={ this.state.bookShelve } 
                        updateBookShelve={(book, shelf) => {
                            this.updateBookShelve(book, shelf)
                        }}
                    />
                )} />

                <Route path="/search" render={() => (
                    <SearchPage 
                        books={ this.state.books }
                        searchBook={(query) => {
                            this.searchBook(query)
                        }} 
                        updateBookShelve={(book, shelf) => {
                            this.updateBookShelve(book, shelf)
                        }}
                        clearSearchPage={() => {
                            this.clearSearchPage()
                        }} 
                    />        
                )} />    
            </div>
        )
    }
}

export default BooksApp
