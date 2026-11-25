const express = require('express');
const cors = require('cors');
const todoRouter = require('./router/todoRouter');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v2/todos', todoRouter);

// app.get("/api/vi/status", (req,res)=>{
//     res.status(200).json({status:'API is Running....'});
// });

module.exports = app;

// const port = process.env.PORT || 3000;

// app.listen(port, ()=>{
//     console.log(`App is running at http://localhost:${port}`);
// });