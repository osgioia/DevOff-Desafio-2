const express = require("express");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();
const app = express();
const port = 3000 || process.env.PORT;


app.use(morgan('dev'));
app.use(bodyparser.urlencoded({ extended: true }));

app.use(require("./routes/routes"));

app.listen(port, () => {
  console.log(`Dev off Desafio 2 listening at http://localhost:${port}`);
});
