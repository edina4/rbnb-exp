import React from "react";

export default function Hero(){
    return(
        <div>
            <img src={require("./photo-grid.png")} className="hero--grid" alt=""/>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--txt">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </div>
    )
}