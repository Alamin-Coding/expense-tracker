const expenseModel = require("../models/expense.model")

const addTransaction = async (req, res)=> {
    console.log("Create Expense Route")

    const newExpense = await expenseModel.create(req.body)

    res.status(201).json({
        status: true,
        message: "New Expense added successfully",
        data: newExpense
    })
}
const editTransaction = async ()=> {

}
const deleteTransaction = async ()=> {

}



module.exports = {addTransaction, editTransaction, deleteTransaction};