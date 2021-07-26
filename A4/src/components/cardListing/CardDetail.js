import React from "react";

const CardDetail = ({url}) => {
    return (
        <div className="URLCardDetails">
            <div className="URLCardDetails__detail">
                <p className="URLCardDetails__text">{url}</p>
            </div>
        </div>
    );
};

export default CardDetail;
