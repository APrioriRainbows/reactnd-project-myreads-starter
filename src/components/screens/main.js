import React, {Component} from 'react'                                                                                  
//import './App.css'
import {Link} from 'react-router-dom'
import BookShelf from '../BookShelf.js'
import * as BooksAPI from '../../BooksAPI'


export default class Main extends Component {
    state = {
	shelves: [
            { slug: 'currentlyReading', name: "Currently Reading", books: [] },
            { slug: 'wantToRead', name: "Want to Read", books: [] },
            { slug: 'read', name: "Read", books: [] }
	]
    }
    constructor(props) {
	super(props);
	//arst
	this.refreshData();
    }
    refreshData = () => {
	BooksAPI.getAll()
	    .then(savedBooks => {
		this.state.shelves.forEach( shelf => {
		    shelf.books = savedBooks.filter(book => book.shelf == shelf.slug)
		})
		this.setState({shelves: this.state.shelves}) // setState is necessary to trigger re-render
	    })
    }
    render() {
        return (
	    <div className="app">
	      <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
		  { this.state.shelves.map( shelf_obj =>
                      <BookShelf shelf_obj={shelf_obj} key={shelf_obj.slug} refreshData={this.refreshData} />
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

