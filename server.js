const express = require('express');
const body_parser = require('body-parser');
const connectDB = require('./config/db');
const userRouter = require('./routers/user.route')
const adminRouter = require('./routers/admin.route')
const cors = require('cors')


require('dotenv').config()

const app = express();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))
const port = 3000;

//connecting Database
connectDB();

app.use(body_parser.json());
app.use('/', userRouter);
app.use('/admin', adminRouter);




app.use((err, req, res, next) => {
    if (err) {
        res.status(err.status || 500).json({ error: { message: err.message || 'Something went wrong!' } });

    } else {
        next()
    }
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is started at port ${port}`);
    }
});
