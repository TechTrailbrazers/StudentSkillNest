console.log("This is the index.js file main file of the backend");
const express = require("express");
const authRouter = require("./routes/auth_route");

const PORT= process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(authRouter);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT,"0.0.0.0",()=>{
    console.log(`Server is running at port ${PORT}`);
});

function signup(){
    console.log("This is the signup function");
    fetch('/signup')
        .then(response => response.text())
        .then(data => {
            window.location.href = '/signup'; // Redirect to signup page
        })
        .catch(error => {
            console.error('Error:', error);
    });
}