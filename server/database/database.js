const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gateway-services', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));