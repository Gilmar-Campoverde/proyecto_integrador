const express =require('express');
const app = express();
const cors = require('cors');

require('./database');

//settings
app.set('puerto', process.env.PORT || 3000);

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/temperatura', require('./routes/temperatura.routes'));

//Starting the server
app.listen(app.get('puerto'), () =>{
    console.log('Puerto del servidor', app.get('puerto'));
})