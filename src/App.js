import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Main from './components/screens/main'
import Search from './components/screens/search'

export default class BooksApp extends Component {
    render(){
    return(
        <Router>
          <div>
            <Route exact path="/" component={Main}/>
            <Route exact path="/search" component={Search}/>
          </div>
       </Router>
    )
    }
}

