import React from "react";
import Card from "./Card";


const CardListing = ({
                         listings,
                         handleEditClick,
                         handleDeleteClick,
                         handleShowDetails
                     }) => {
    return (
        <div className="URLListing">
            {listings.map((listing) => (
                <Card
                    key={listing._id}
                    data={listing}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                    handleShowDetails={handleShowDetails}
                />
            ))}
        </div>
    );
};

export default CardListing;
