import React from "react";
import PropTypes from "prop-types";

import BookSelfChange from "./BookSelfChange";

const Book = ({ book, updateBookShelve }) => {
    const default_img = `http://books.google.com/books/content?id=\
    a_asDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`;

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url("${(book.imageLinks &&
                                book.imageLinks.thumbnail) ||
                                default_img}")`
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
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateBookShelve: PropTypes.func.isRequired
};

export default Book;
