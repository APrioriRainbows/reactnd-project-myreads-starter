import React, {Component} from 'react'
import Book from './Book.js'
export default class Shelf extends Component {
    shelves = ["Currently Reading", "Want to Read", "Read"]
    render(){
	return(
            <div>
	      <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelves}</h2>                                                                             
                <div className="bookshelf-books">                                                                                                   
                  <ol className="books-grid">
                    <Book/>
                  </ol>                                                                                                                             
                </div>
	      </div> 	      
            </div>
	)
    }
}
