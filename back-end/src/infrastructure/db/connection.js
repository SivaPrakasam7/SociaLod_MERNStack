const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.MONGO_DB, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(res => { console.log('Database connected') }).catch(err => { console.log(err) })
};