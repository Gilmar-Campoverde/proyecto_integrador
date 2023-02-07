const express =require('express');
const app = express();
const cors = require('cors');

require('./database');

app.use(cors());
app.use(express.json());

app.use('/api/temperatura', require('./routes/temperatura.routes'));

app.listen('3000');
console.log('Servidor corriendo', 3000);