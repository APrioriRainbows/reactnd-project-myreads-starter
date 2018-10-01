import React, {Component} from 'react'
import * as BooksAPI from '../../BooksAPI'
import Search from '../Search'
import Book from '../Book'
//import './App.css'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class SearchPage extends Component {
    state = {
        resultList: []
    }
    getBooks = (resultList) => {
        this.setState({resultList: resultList})
    }
    updateSavedBooks(savedBooks) {
	console.log(savedBooks)
        BooksAPI.getAll()
            .then(savedBooks => {
                this.setState({savedBooks:savedBooks})
            })
    }
    render() {
	let resultList = this.state.resultList || []
	if (resultList.error) { resultList = [] }
        return(
            <div className="search-books">
              <div className="search-books-bar">
	        <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                  <Search returnResults={this.getBooks}/>
	        </div>
	      </div>
	      <div className="search-books-results">
	            <ol className="books-grid">
                    { resultList.map(book => <Book bookinfo={book} updatesavedbooks={(b) =>this.updateSavedBooks(b)}/> ) }
	            </ol>
	      </div>
	    </div>
        )
    }
}

