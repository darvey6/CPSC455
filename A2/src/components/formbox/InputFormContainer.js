import React from "react";
import "./InputFormContainer.css";
import FromInputs from "./FromInputs";

const InputFormContainer = ({
                                name,
                                setName,
                                rating,
                                setRating,
                                url,
                                setURL,
                                isEdit,
                                clearInput,
                                handleAddOrEditClick,
                            }) => {
    return (
        <div className="URLHeader">
            <h1>Welcome</h1>
            <FromInputs
                name={name}
                setName={setName}
                rating={rating}
                setRating={setRating}
                url={url}
                setURL={setURL}
                isEdit={isEdit}
                clearInput={clearInput}
                handleAddOrEditClick={handleAddOrEditClick}
            />
        </div>
    );
};

export default InputFormContainer;
