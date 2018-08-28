import React from 'react'
import { Route } from 'react-router-dom'
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
    books : [],
  }
  // Create lifecycle event to fetch books from BooksApi component
  componentDidMount() {
    BooksAPI.getAll().then((books)=>{// When promise is resolved
      this.setState({books})// Push books fetched in books array
    })
  }

  // Create shelf changer func
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)// Update book shelf when book is moved to another shelf by user
    alert(`done, You moved the book to the '${shelf}' shelf` )// Display alert to user 
    this.componentDidMount()// Call the lifecycle event
  }
  
  render() {// render UI
    return (
      <div className="app">
        {/* Set route app */}
        <Route exact path='/search' render={() => (
          < Search books = {this.state.books}  changeShelf = {this.changeShelf}/>
        )} />
        <Route exact  path='/' render={() => (
          < Main books = {this.state.books} changeShelf = {this.changeShelf}/>
       )} />
      </div>
    )
  }
}

export default BooksApp
