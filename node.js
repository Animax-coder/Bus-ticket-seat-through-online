const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Bus Ticket Booking System');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
