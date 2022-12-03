const express = require("express");
const cors = require("cors");
const { getCompliment, getFortune, submitCompliment, registerUser, deleteUser } = require('./controller')

const app = express();

app.use(cors());

app.use(express.json());


app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.post("/api/submitCompliment", submitCompliment);

app.post("/api/users", registerUser)

app.delete("/api/deleteUser/:id", deleteUser)

app.listen(4000, () => console.log("Server running on 4000"));
