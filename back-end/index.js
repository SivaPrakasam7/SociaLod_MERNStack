const express = require('express'),
    route = require('./src/interfaces/routes/routes'),
    errorHandler = require('./src/interfaces/middleware/responseHandler'),
    connectMDB = require('./src/infrastructure/db/connection'),
    path = require('path'),
    cors = require('cors'),
    app = express();

require('dotenv').config({ path: path.resolve(__dirname, './src/infrastructure/config/.env') });

const PORT = process.env.PORT || 5000;

connectMDB();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    var info = `<h1>SociaLod Backend Manual</h1><table><tr><th>Paths</th><th>Methods</th><th>Parameters</th></tr>`;
    for (var i of route.stack) {
        info = info + `<tr><td>${i.route.path}</td><td>${Object.keys(i.route.methods)}</td><td>${[]}</td></tr>`;
    }
    info = info + "</table>";
    res.status(200).send(info);
});

app.use('/api', route);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server listen at ${process.env.URL}`)
});