import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI.js'
import './App.css'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Main from './components/screens/main.js'
import SearchPage from './components/screens/search.js'

export default class BooksApp extends Component {
    render(){
	return(
	    <Router>
	      <div>
		<Route exact path="/" component={Main}/>
		<Route exact path="/search" component={SearchPage}/>
	      </div>
	    </Router>
        )
    }
}

