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
    constructor(props){
        super(props)
        this.refreshData()

    }
    state = {
        queryResults: [],
        savedBooks: []
    }
    getBooks = (queryResults) => {
        this.setState({queryResults: queryResults})
    }
    refreshData = () => {
        BooksAPI.getAll()
            .then(savedBooks => {
                this.setState({savedBooks:savedBooks})
            })
    }
    render() {
        let queryResults = this.state.queryResults
        let savedBooks = this.state.savedBooks
        let savedBookIds = this.state.savedBooks.map( book => book.id)
        let List = queryResults.filter( book => savedBookIds.indexOf(book.id) === -1)
	if (queryResults.error) { queryResults = [] }
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
		  { List.map(book => <Book bookinfo={book} /> ) }
	        </ol>
	      </div>
	    </div>
        )
    }
}

