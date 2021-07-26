import React, {useEffect, useState} from "react";
import "./App.css";
import InputFormContainer from "./components/formbox/InputFormContainer";
import CardListing from "./components/cardListing/CardListing";

function App() {
    const initialState = [];

    const fetchData = () => {
        fetch('http://localhost:9000/database', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => setListings(response))
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
        fetch('http://localhost:9000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(listings),
        }).then(() =>{
            console.log("deleted listings");
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
        fetch('http://localhost:9000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newListing),
        }).then(() =>{
            console.log("Edited listings");
        })
    };

    const addListing = (newListing) => {
        setListings([newListing, ...listings]);
        fetch('http://localhost:9000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newListing),
        }).then(() =>{
            console.log("added listings");
        })
    };

    // const addCard = () => {
    //     fetch('http://localhost:9000/testAPI', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             name,
    //             url,
    //             rating: rating,
    //             id: Math.floor(Math.random() * 101).toLocaleString(),
    //         }),
    //     })
    //         .then((res) => res.json())
    //         .then((result) => setData(result.rows))
    //         .catch((err) => console.log('error'))
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     addCard() // Save games when form is submitted
    // }

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
