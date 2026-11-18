const express = require("express");
const { addTransaction, allTransactions, deleteTransaction } = require("../controllers/expense.controller");

const router = express.Router()

router.post("/create-expense", addTransaction)
router.get("/transactions", allTransactions)
router.delete("/transaction/:id", deleteTransaction)

module.exports = router;