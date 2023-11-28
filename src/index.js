const express = require('express');
const cors = require('cors');
const router = require('./routers/index');

const app = express();
app.use(cors());

app.use(express.json());
app.use("/", router);

app.listen(3000, () => {
    console.log("Server is up and running in port 3000");
});