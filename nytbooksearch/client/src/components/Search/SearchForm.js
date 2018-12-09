import React from "react";


function Form(props) {

    return (

        <form className="search">
            <div className="form-group">
                <label htmlFor="breed">Book:</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="books"
                    type="text"
                    className="form-control"
                    placeholder="Search for any book"
                    id="bookInput"
                />
           

                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
                </button>
            </div>
        </form>



    )

}

export default Form;