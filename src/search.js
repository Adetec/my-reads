import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './book'

class Search extends Component {
    state = {
        query : '',
        searchBooks : []
    }

    updateQuery = (query) => {
        this.setState({
            query : query
        })
        this.getBooks(query)
    }

    getBooks = (query) => {
        if (query) {
            BooksAPI.search(query).then((searchBooks)=>{
                if (searchBooks.error) {
                    this.setState({searchBooks : []})        
                }
                else {
                    this.setState({searchBooks})
                }
            })
        }
        else {
            this.setState({searchBooks : []})
        }
    }

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
                    */}
                    <input type="text" placeholder="Search by title or author" value = {this.state.query} onChange = {(event)=>{this.updateQuery(event.target.value)}}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        
                        {
                            this.state.searchBooks.map(bookSearched =>{
                                let shelfBook;
                                this.props.books.map(pikedBook =>{
                                    if (pikedBook.id === bookSearched.id) {
                                        shelfBook = pikedBook.shelf
                                        console.log(pikedBook.id, bookSearched.id)
                                    } else {
                                        shelfBook = 'none'
                                    }
                                  return bookSearched.shelf = shelfBook
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
