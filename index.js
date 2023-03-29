const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./routes');

const app = express();

const port = 3001;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use('/', routes);
app.use('/about', routes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}
);