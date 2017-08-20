import React, { Component } from "react";
import PropTypes from "prop-types";

import BookSelfChange from "./BookSelfChange";

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        updateBookShelve: PropTypes.func.isRequired
    };

    render() {
        const { book, updateBookShelve } = this.props;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url("${book.imageLinks
                                    .thumbnail}")`
                            }}
                        />
                        <div className="book-shelf-changer">
                            <BookSelfChange
                                book={book}
                                updateBookShelve={updateBookShelve}
                            />
                        </div>
                    </div>
                    <div className="book-title">
                        {book.title}
                    </div>
                    <div className="book-authors">
                        {book.authors.map((author, index) =>
                            <span key={index}>
                                {author}
                            </span>
                        )}
                    </div>
                </div>
            </li>
        );
    }
}

export default Book;
