const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'academic_system'
});
db.connect(err => {
    if (err) console.log("DB Error:", err);
    else console.log("MySQL Connected");
});

app.get('/', (req, res) => {
    res.send('Server Running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log('Server running on port ${PORT}');
});
