import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import debounce from 'lodash.debounce'

export default class Search extends Component {
    constructor(props){
        super(props)
        this.returnBooks = debounce(this.returnBooks, 1000)
    }

    state = {
        query:''
    }
    updateQuery = (query) => {
        this.setState({query: query})
	this.returnBooks(query)
    }
    returnBooks = (query) => {
	if (query.trim() == ''){ this.props.returnResults([]); return; }
	BooksAPI.search(query.trim()).then((books) => {
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
