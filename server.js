const express = require('express');
const body_parser = require('body-parser');
const connectDB = require('./config/db');
const userRouter = require('./routers/user.route')

const app = express();
const port = 3000;

//connecting Database
connectDB();

app.use(body_parser.json());
app.use('/', userRouter);

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is started at port ${port}`);
    }
});
