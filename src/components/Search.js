import React, {Component} from 'react'
import Book from './Book.js'
import * as BooksAPI from '../BooksAPI.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Search extends Component {
    state = {
        query:'',
	resultList: []
    }
    updateQuery = (query) => {
        this.setState({query: query.trim()})
	this.returnBooks(query)
    }
    returnBooks = (query) => {
	BooksAPI.search(query).then((books) => {
            this.setState({resultList:books});
            this.props.returnResults(books)
        })
    }
    render(){
	return(
	    <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>                                                                    
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>
              </div>                                                                                                                                  
            </div>  
        )
    }
}
