import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import {serverPort} from "../etc/config.json"

import * as db from "./utils/DataBaseUtils.js";

// Set up connection of database
db.setUpConnection();

// Initialization of express application
const app = express();

// Using bodyParser middleware
app.use(bodyParser.json());

// Allow requests from any origin
// Fix the error "Access-Control-Allow-Origin"
app.use(cors({origin : "*"}));


// RESTful API handlers
app.get("/notes", (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post("/notes", (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete("/notes/:id", (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, () => {
    console.log(`Server is up and running on port ${serverPort}`)
});
