import React, { Component } from 'react'

class Book extends Component {
  render() {
    let cover = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : 'https://as.nyu.edu/content/dam/nyu-as/faculty/images/PlaceholderBook.png' //Image picked from: https://as.nyu.edu/
    return (
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${cover}')` }}></div>
            <div className="book-shelf-changer">
                <select
                    onChange={
                        // When user move Book from a shelf to an other
                        (event)=> this.props.changeShelf(this.props.book, event.target.value)
                    }
                    value = {this.props.book.shelf}// Set default book shelf value from it's object shelf property 
                >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
        </div>
    )
  }
}

export default Book
