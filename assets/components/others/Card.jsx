import React from 'react';

const Card = ({
    title = "",
    description = "",
    date = ""
}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <small>{date}</small>
            </div>
        </div>
    )
}
export default Card;