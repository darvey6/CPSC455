import React from "react";
import Modal from "../modal/Modal";
import useModal from "../modal/useModal";

const CardImage = ({
                       name,
                       url,
                       id,
                       handleEditClick,
                       handleDeleteClick,
                       data
                   }) => {
    const {isShowing, toggle} = useModal();
    return (
        <div className="URLCardImg">
            <img src={url} alt={name} className="URLCardImg__img"/>
            <button
                className="URLCardImg__editButton"
                onClick={handleEditClick}
                value={id}
            >
                Edit
            </button>
            <button
                className="URLCardImg__deleteButton"
                onClick={handleDeleteClick}
                value={id}
            >
                Delete
            </button>
            <div id="detailsWrapper">
                <button onClick={toggle}>Show Details</button>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                    data={data}
                />
            </div>


        </div>
    );
};

export default CardImage;
