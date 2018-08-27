import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Main  from './main'
import Search from './search'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books : []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
      console.log(this.state.books)
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    console.log(`done, You moved the book to the ${shelf} shelf` )
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
      console.log(this.state.books)
    })
  }
  
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          < Search />
        ) : (
          < Main books = {this.state.books} changeShelf = {this.changeShelf}/>
        )}
      </div>
    )
  }
}

export default BooksApp
