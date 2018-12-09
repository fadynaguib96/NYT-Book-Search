import React from "react";
import "./cards.css"


export function Card(props) {
    return (
        
            <div className="row">
                <div className="card">
                    <img className="card-img-top myImg" src={props.image} />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.author}</p>
                            <p className="card-text">{props.des}</p>
                            <a href={props.link} className="btn btn-primary">More Info</a>
                            <button onClick = {props.saveBtn} value = {props.value} className="btn btn-primary">
                            Save this Book</button>
                        </div>
                    </div>
                </div>
          
            );
        }

export default Card;
        
