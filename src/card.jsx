import React from "react";
import './fruitsStyle.css';

class Card extends React.Component{
    render() {
        const {data} = this.props 
        return (
            <div className="container">
                <img className="container_img" src={data.src} alt="fruit" />
                <p className="container_text">{data.title}</p>
            </div>
        )
    }
}
export default Card