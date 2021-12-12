require('./server/database/database');
const app = require('./server/app');


app.listen(app.get('port'), () => {
    console.log('Server is running on Port: ' + app.get('port'));
});