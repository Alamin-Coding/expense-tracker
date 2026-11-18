
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express()
const expenseRouter = require("./routes/expense.route")

require('dotenv').config();
const PORT = process.env.PORT
connectDB()

app.use(express.json())
app.use(cors())

app.use("/api/v1", expenseRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})