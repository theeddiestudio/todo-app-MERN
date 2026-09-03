const denv = require('dotenv');
const mg = require('mongoose');
const app = require('./index');

denv.config({path: './config.env'});

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mg.connect(DB).then(()=> {
    console.log("Database Successful in Connection....")
}).catch((err) => {
    console.log("Database Connection Error ", err.message);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`App is running at http://localhost:${port}`);
});