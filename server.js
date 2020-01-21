const express = requre('express')
const routes = require('./routes/index')
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.use(routes);
app.listen(PORT, function(){
    console.log(`API Server now listening on PORT ${PORT}`)
})