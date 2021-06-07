import React, {useState} from "react";
import "./App.css";
import InputFormContainer from "./components/formBox/InputFormContainer";
import CardListing from "./components/cardListing/CardListing";

function App() {
    const initialState = [
        {
            name: "Dog",
            url: "https://bit.ly/3wYpGB0",
            rating: 4,
            id: "1",
        },
        {
            name: "Cat",
            url: "https://bit.ly/3wS7au6",
            rating: 2,
            id: "2",
        },
        {
            name: "Rocket",
            url: "https://media.istockphoto.com/vectors/rocket-launch-vector-illustration-isolated-on-white-vector-id876037616?k=6&m=876037616&s=612x612&w=0&h=souIgzQ2Yj43H1cffpAI4nwa3KUvseD7am6ovPsao8c=",
            rating: 5,
            id: "3"
        }
    ];


    const [listings, setListings] = useState(initialState);
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [url, setURL] = useState("");
    const [currentListing, setCurrentListing] = useState({});

    const handleEditClick = (e) => {
        const item = listings.filter((listing) => listing.id === e.target.value);
        setIsEdit(true);
        setCurrentListing(item[0]);
        setName(item[0].name);
        setRating(item[0].rating);
        setURL(item[0].url);
    };

    const handleDeleteClick = (e) => {
        const newListings = listings.filter(
            (listing) => listing.id !== e.target.value
        );
        setListings(newListings);
    };

    const clearInput = () => {
        setIsEdit(false);
        setName("");
        setRating("");
        setURL("");
        setCurrentListing({});
    };

    const handleAddOrEditClick = () => {
        if (isEdit) {
            const newListing = {
                name,
                url,
                rating: rating,
                id: currentListing.id,
            };
            editCurrentListing(newListing);
        } else {
            const newListing = {
                name,
                url,
                rating: rating,
                id: Math.floor(Math.random() * 101).toLocaleString(),
            };
            addListing(newListing);

        }
        clearInput();
    };

    const editCurrentListing = (newListing) => {
        setListings(
            listings.map((listing) =>
                listing.id === currentListing.id ? newListing : listing
            )
        );
    };

    const addListing = (newListing) => {
        setListings([newListing, ...listings]);
    };

    const handleShowDetails = (e) => {
    }

    return (
        <div className="app">
            <InputFormContainer
                isEdit={isEdit}
                name={name}
                setName={setName}
                rating={rating}
                setRating={setRating}
                url={url}
                setURL={setURL}
                clearInput={clearInput}
                handleAddOrEditClick={handleAddOrEditClick}
            />
            {listings.length === 0 && (
                <h2 style={{paddingTop: 10, textAlign: "center"}}>No Results</h2>
            )}
            <CardListing
                listings={listings}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
                handleShowDetails={handleShowDetails}
            />
        </div>
    );
}

export default App;
