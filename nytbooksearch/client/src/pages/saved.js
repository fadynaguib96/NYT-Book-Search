import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from "../utils/API";
import Card from "../components/Cards/cards"
import { Link } from "react-router-dom";


class SavedPage extends Component {

state = {
    saved : []
}

componentWillMount() {
    this.loadBooks()
}

loadBooks = () => {
    
    API.getBooks().then(result => this.setState({saved : result.data}))
    
    console.log(this.state.saved)
   

}




render (){
    return (
        <div>
                <Navbar />
                <Jumbotron />
                <div className="container">
                    {this.state.saved.map(book => {

                            return (
                                <Card title={book.title} link={book.link} image={book.image} des={book.des} author={book.author}/>
                            )

                        })}
                </div>


        </div>


    )
}


} 

export default SavedPage;