// YOUR CODE HERE
const cors = require("cors");
const express = require('express')
const storeRouter = require("./routes/storeRoutes");
const app = express()

app.use(express.json())
app.use(cors())
app.use("/store", storeRouter);

app.get("/", async (req, res) => {
    res.status(200).json({ping: "pong"})
})

const port = 6001;

app.listen(port, () => {
  console.log(`🚀 Server listening on port ` + port);
});