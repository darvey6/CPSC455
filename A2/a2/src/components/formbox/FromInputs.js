import React from "react";

const FromInputs = ({
                        isEdit,
                        name,
                        setName,
                        rating,
                        setRating,
                        url,
                        setURL,
                        clearInput,
                        handleAddOrEditClick,
                    }) => {
    const buttonContent = isEdit ? "Change" : "Add";
    return (
        <div>
            <div className="inputGroup">
                <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder={"Card Name"}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    name="rating"
                    value={rating}
                    placeholder={"Card Rating"}
                    onChange={(e) => setRating(e.target.value)}
                />
                <input
                    type="text"
                    name="URL"
                    value={url}
                    placeholder={"Image URL"}
                    onChange={(e) => setURL(e.target.value)}
                />
                <button className="button" onClick={handleAddOrEditClick}>
                    {buttonContent}
                </button>
                <button className="button" onClick={clearInput}>
                    Clear
                </button>
            </div>
        </div>
    );
};

export default FromInputs;
