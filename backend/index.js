const server = require('./server');
const { PORT, MONGO_URI} = require('./config');
const moongose = require('mongoose');

moongose
    .connect(MONGO_URI, {useNewUrlParser: true})
    .then( () => {
        server.listen( PORT , () => {
            console.log(`Coding App backend running on port ${PORT}`);
        });
    })
    .catch(console.log);

