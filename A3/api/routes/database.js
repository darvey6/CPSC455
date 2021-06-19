var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
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
res.json(initialState);
});


module.exports = router;