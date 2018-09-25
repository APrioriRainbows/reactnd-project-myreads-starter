import React, {Component} from 'react'

export default class Book extends Component {
    state = {
        shelf: "none"
    }

    updateShelf = (event) => {
	this.setState({shelf: event.target.value})
    }
    render(){
	return(
            <li>                                                                                                                            
              <div className="book" shelf={this.state.shelf}>
                <div className="book-top">                                                                                                  
                  <div className="book-cover" style={{width: 128, height: 193, backgroundImage: "url(`${book.imageLinks ? book.imageLinks.thumbnail : http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-yl}`)"}}></div>
                  <div className="book-shelf-changer">
                    <select value={this.state.shelf} onChange={this.updateShelf}>                     
                      <option value="move" disabled>Move to...</option>                                                                     
                      <option value="currentlyReading">Currently Reading</option>                                                           
                      <option value="wantToRead">Want to Read</option>                                                                      
                      <option value="read">Read</option>                                                                                    
                      <option value="none">None</option>                                                                                    
                    </select>                                                                                                               
                  </div>                                                                                                                    
                </div>                                                                                                                      
                <div className="book-title">{this.props.title}</div>                                                                     
                <div className="book-authors">{this.props.authors}</div>                                                                              
              </div>                                                                                                                        
            </li>                                            
	)
    }
}
