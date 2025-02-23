const express = require("express");
const cors = require('cors');
const router = require("./routes/feedback")

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors())

app.use("/api/v1/", router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});