import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './book'

class Main extends Component {
  render() {
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
                <ol className="books-grid">
                    {   // Filter and map through each book classed in 'currentlyReading' shelf and render it
                        this.props.books.filter(book => book.shelf === 'currentlyReading').map(book =>(
                        <li key = {book.id}>
                            <Book book = {book} changeShelf = {this.props.changeShelf}/>
                        </li>
                    ))}
                </ol>
                </div>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {   // Filter and map through each book classed in 'wantToRead' shelf and render it 
                        this.props.books.filter(book => book.shelf === 'wantToRead').map(book =>(
                        <li key = {book.id}>
                            <Book book = {book} changeShelf = {this.props.changeShelf}/>
                        </li>
                    ))}
                </ol>
                </div>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {   // Filter and map through each book classed in 'read' shelf and render it 
                    this.props.books.filter(book => book.shelf === 'read').map(book =>(
                        <li key = {book.id}>
                            <Book book = {book} changeShelf = {this.props.changeShelf}/>
                        </li>
                    ))}
                </ol>
                </div>
            </div>
            </div>
        </div>
        <div className="open-search">
            {/* Set the router link to './search' */}
            <Link to="/search" >Add a book</Link>
        </div>
        </div>
    )
  }
}

export default Main
