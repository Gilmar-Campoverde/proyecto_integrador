const express =require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('./database');

//settings
app.set('puerto', process.env.PORT || 3000);

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/api/temperatura', require('./routes/temperatura.routes'));
app.use('/api/garaje', require('./routes/garaje.routes'));
app.use('/api/iluminacion', require('./routes/iluminacion.routes'));

//Starting the server
app.listen(app.get('puerto'), () =>{
    console.log('Puerto del servidor', app.get('puerto'));
})