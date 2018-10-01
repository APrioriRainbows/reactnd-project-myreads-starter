import React, {Component} from 'react'                                                                                  
//import './App.css'
import {Link} from 'react-router-dom'
import BookShelf from '../BookShelf.js'
import * as BooksAPI from '../../BooksAPI'


export default class Main extends Component {
    shelves = {
        currentlyReading: "Currently Reading",
        wantToRead: "Want to Read",
        read: "Read"
    }
    render() {
        return (
	    <div className="app">
	      <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
		  {Object.entries(this.shelves).map(
                      (keyValue) =>
                      <BookShelf keyValue={keyValue} key={keyValue[0]}/>
                  )}
                </div>
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
            </div>
        )
    }
}

