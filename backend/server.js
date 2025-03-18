const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: '*'
}))

app.get('/names', (req, res) => {
    res.send('Trung');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});