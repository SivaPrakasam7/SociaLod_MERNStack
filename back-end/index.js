const express = require('express'),
    route = require('./src/interfaces/routes/routes'),
    errorHandler = require('./src/interfaces/middleware/responseHandler'),
    connectMDB = require('./src/infrastructure/db/connection'),
    path = require('path'),
    app = express();

require('dotenv').config({ path: path.resolve(__dirname, './src/infrastructure/config/.env') });

const PORT = process.env.PORT || 5000;

connectMDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("API started");
});

app.use('/api', route);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server listen at http://localhost:${process.env.PORT}`)
});