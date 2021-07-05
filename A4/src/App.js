import React, {useEffect, useState} from "react";
import "./App.css";
import InputFormContainer from "./components/formbox/InputFormContainer";
import CardListing from "./components/cardListing/CardListing";

function App() {
    const initialState = [];

    const fetchData = () => {
        fetch('http://localhost:5000/api/cards', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => setListings(response.data))
            .then(response =>console.log(response))
            .catch((err) => console.log('error'))
    }

    useEffect(() => {
        fetchData()
    }, [])

    const [listings, setListings] = useState(initialState);
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [url, setURL] = useState("");
    const [currentListing, setCurrentListing] = useState({});

    const handleEditClick = (e) => {
        const item = listings.filter((listing) => listing._id === e.target.value);
        setIsEdit(true);
        setCurrentListing(item[0]);
        setName(item[0].name);
        setRating(item[0].rating);
        setURL(item[0].url);
    };

    const handleDeleteClick = (e) => {
        fetch(`http://localhost:5000/api/card/${e.target.value}`, {
            method: "DELETE",
        }).then(() =>{
            console.log("deleted listings");
            const newListings = listings.filter(
                (listing) => listing._id !== e.target.value
            );
            setListings(newListings);
        })
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
                id: currentListing._id,
            };
            editCurrentListing(newListing);
        } else {
            const newListing = {
                name,
                url,
                rating: rating,
            };
            addListing(newListing);

        }
        clearInput();
    };

    const editCurrentListing = (newListing) => {
        setListings(
            listings.map((listing) =>
                listing._id === currentListing._id ? newListing : listing
            )
        );
        fetch(`http://localhost:5000/api/card/${newListing.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newListing),
        }).then(() =>{
            window.location.reload(false);
            console.log("added listings");
        })

    };

    const addListing = (newListing) => {
        setListings([newListing, ...listings]);
        fetch('http://localhost:5000/api/card', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newListing),
        }).then(() =>{
            console.log("added listings");
        })
    };

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
            />
        </div>
    );
}

export default App;
