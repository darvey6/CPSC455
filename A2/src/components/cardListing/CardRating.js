import React from "react";

const CardRating = ({rating}) => {
    const ratingContent = rating.toLocaleString();
    return <h4 className="URLCardRating">{ratingContent + " Star(s)"}</h4>;
};

export default CardRating;
