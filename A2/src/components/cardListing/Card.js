import React from "react";
import CardDetail from "./CardDetail";
import CardImage from "./CardImage";
import CardName from "./CardName";
import CardRating from "./CardRating";

const Card = ({data, handleEditClick, handleDeleteClick, handleShowDetails}) => {
    return (
        <div className="URLCard">
            <CardImage
                name={data.name}
                url={data.url}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
                handleShowDetails={handleShowDetails}
                id={data.id}
                data={data}
            />
            <hr/>
            <CardName name={data.name}/>
            <hr/>
            <CardDetail url={data.url}/>
            <hr/>
            <CardRating rating={data.rating}/>
            <hr/>
        </div>
    );
};

export default Card;
