const express = require('express');

const tourRouter = require('./routes/tourRoutes'); // kita implement nanti

const app = express();

// Middlewares

app.use(express.json());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// routes
app.use('/api/v1/tours', tourRouter);

module.exports = app;