import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Main from './components/screens/main'
import Search from './components/screens/search'

export default class BooksApp extends Component {
    state = {
	books: []
    }
    componentDidMount(){
    BooksAPI.getAll().then(books => {
	this.setState({books:books})
    })
    }
    render(){
	console.log('this',this)
    return(
        <Router>
          <div>
            <Route exact path="/" render={ (props) => <Main books={ this.state.books } /> }/>
            <Route exact path="/search" component={Search}/>
          </div>
       </Router>
    )
    }
}

