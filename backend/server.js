require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: '*'
}))

app.get('/', (req, res) => {
    res.send('Hello everyone');
});

app.get('/names', (req, res) => {
    res.send('Trung');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});