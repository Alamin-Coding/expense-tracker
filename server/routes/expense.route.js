const express = require("express");
const { addTransaction } = require("../controllers/expense.controller");

const router = express.Router()

router.post("/create-expense", addTransaction)

module.exports = router;