import {getConnection} from "./../database/database";

// GET:
const getUsers = async (request, response) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, username, email_address  FROM user");
        response.json(result);
        console.log(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    } 
    //response.json("server online");
};

// POST:
const postUser = async (request, response) => {
    try {

        const {username, email_address} = request.body;
        console.log('Received data: ', username, email_address);
        const user = { username, email_address };

        const connection = await getConnection();
        const result = await connection.query("INSERT INTO user SET ?", user);
        console.log('Database insertion result:', result);
        response.json(result);
        console.log(result);

    } catch (error) {
        console.error('Error inserting user:', error);
        response.status(500).send(error.message);
    }
};

export const methods = {
    
    getUsers,
    postUser
};