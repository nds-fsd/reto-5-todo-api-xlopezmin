const express = require('express');
const app = express();

const router = require('./routers/index');

app.use(express.json());
app.use("/", router);

app.listen(3000, () => {
    console.log("Server is up and running in port 3000");
});