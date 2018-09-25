import React, {Component} from 'react'                                                                                  
//import './App.css'
import {Link} from 'react-router-dom'
import Book from '../Book.js'
import BookShelf from '../BookShelf.js'
export default class Main extends Component {
    render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf/>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
      </div>
    )
  }
}
