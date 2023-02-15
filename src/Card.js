import React from "react";



export default function Card(props){
    let cardBedge 
    if (props.openSpots === 0){
        cardBedge="SOLD OUT"
    }else if(props.location === "Online"){
        cardBedge= "ONLINE"
    }

    return(
        <div className="card--container">
            {cardBedge && <div className="card--bedge">{cardBedge}</div>}
            <img src={`.${props.img}`} className="card--photo" alt=""/>
            <div className="review-container">
                <img src="../images/star.png" className="star--photo" alt=""/>
                <span>{props.rating}</span>
                <span className="card--review">({props.reviewCount})</span>
                <span> • {props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="price--container"><span className="card--price"> From ${props.price}</span> / person </p>
        </div>
    )

}