import React, {Component} from 'react'
import * as BooksAPI from '../../BooksAPI'
import Search from '../Search'
//import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class SearchPage extends Component {
    render() {
	return(
          <div className="search-books">                                                                                                              
            <div className="search-books-bar">                                                                                                        
	      <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">                                                                                            
                <Search/>
	      </div>
	    </div>
	    <div className="search-books-results">
	      <ol className="books-grid">
	      </ol>
	    </div>
	  </div>
	)
    }
}

