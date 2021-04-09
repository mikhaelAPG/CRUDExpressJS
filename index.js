const fs = require('fs');
const express = require('express');
const app = express();

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev_data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({ 
        status:'success!',
        result: tours.length,
        data: {
            tours: tours
        }
    });
});

//express
const port = 3000;
app.listen(port, () => {
    console.log('app running on port ${port} ....');

});