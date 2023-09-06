import express from "express";
import morgan from "morgan";
//routes
import usersRoutes from "./routes/users.routes"

const app = express();
const cors = require('cors');


//settings:
app.set("port", 4000);

//middelware:
app.use(morgan("dev")); //morgan dev mode allows to see what kind of verb is proccesing the server; request?(GET, POST, PUT, DELETE)
const bodyParser = require('body-parser');
// ...
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json()); // parsing the request body as JSON
app.use(cors()); //  Cross-Origin Resource Sharing headers to allow requests from your client-side domain

//routes:
app.use("/api/users", usersRoutes); //user routes

export default app;