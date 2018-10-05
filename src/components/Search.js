import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI.js'
import { Link } from 'react-router-dom'
import debounce from 'lodash.debounce'

export default class Search extends Component {
    constructor(props){
        super(props)
        this.getQueryBooks = debounce(this.getQueryBooks, 1000)
    }

    state = {
        query:''
    }
    updateQuery = (query) => {
        this.setState({query: query})
	this.getQueryBooks(query)
    }
    getQueryBooks = (query) => { 
	if (query.trim() === ''){ this.props.returnResult([]); return; }
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
