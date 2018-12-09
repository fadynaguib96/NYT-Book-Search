import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Form from "../components/Search/SearchForm"
import API from "../utils/API";
import Card from "../components/Cards/cards"
import { Link } from "react-router-dom";



class SearchPage extends Component {

    state = {
        search: "",
        books: []
    }

    handleInputChange = event => {
        const { value } = event.target;
        this.setState({
            search: value
        });


    };

    saveBtn = event => {

        const {value} = event.target


        API.saveBook(value).then(res => console.log("working"))

    }


    handleFormSubmit = event => {
        event.preventDefault();

        API.getBook(this.state.search)
            .then(result => this.setState({ books: result.data.items}))
            .catch(err => console.log(err));


        console.log(this.state.books)


    };

    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
                <Form value={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
                <div className="container">
                    {this.state.books.map(book => {
                            return (
                                <Card title={book.volumeInfo.title} link={book.volumeInfo.infoLink} image={book.volumeInfo.imageLinks.smallThumbnail} des={book.volumeInfo.description} author={book.volumeInfo.authors[0]} 
                                saveBtn={this.saveBtn} value={book.id}/>
                            )

                        })}
                </div>
            </div>
        )
    }


}


export default SearchPage;