import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './book'

class Search extends Component {
    /* Create state that contain empty string for search query,
     * also create an empty array to store fetched books from BooksApi
     */
    state = {
        query : '',
        searchBooks : []
    }
    // Create a methode that update query state
    updateQuery = (query) => {
        this.setState({
            query : query
        })
        this.getBooks(query)
    }
    // Create a methode that fetch books from search query
    getBooks = (query) => {
        if (query) {// If there is a query
            BooksAPI.search(query).then((searchBooks)=>{// When search promise is resolved
                if (searchBooks.error) {// if the query result doesn't match any book fetched
                    this.setState({searchBooks : []}) // return an emty array and throw error
                }
                else {// If it matches
                    this.setState({searchBooks})// Push fetched book to that array
                }
            })
        }
        else {
            this.setState({searchBooks : []})// Else return an emty array
        }
    }
    // Render UI
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                    {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                    */
                   
                    // TODO: Autofocus and handle update query method on change event
                   }
                    <input type="text" autoFocus placeholder="Search by title or author" value = {this.state.query} onChange = {(event)=>{this.updateQuery(event.target.value)}}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        
                        { /*TODO: Map over each book and check if there is one that is shelfed, get it's shelf value
                           * if not, then set it's shelf value to 'none'
                           */
                            this.state.searchBooks.map(bookSearched =>{
                                bookSearched.shelf = 'none';
                                this.props.books.map(book =>{
                                    if (book.id === bookSearched.id) {
                                        bookSearched.shelf = book.shelf
                                    }
                                  return bookSearched.shelf
                                })
                                
                                return(
                                    <li key={bookSearched.id}><Book book={bookSearched} changeShelf = {this.props.changeShelf}/></li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search
