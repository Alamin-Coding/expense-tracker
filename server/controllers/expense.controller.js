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
const allTransactions = async (req, res)=> {
    console.log("all Transactions")

    const transactions = await expenseModel.find({})

    res.status(200).json({
        status: true,
        message: "get all transaction successfully",
        data: transactions
    })
}
const editTransaction = async ()=> {

}
const deleteTransaction = async (req, res)=> {
    const {id} = req.params;

    const isExist = await expenseModel.findByIdAndDelete({_id: id})

    if (!isExist) {
        return res.json({
            status: false,
            message: "Item not found",
            data: isExist
        })
    }



    return res.json({
            status: true,
            message: `${isExist.title} delete successfully`,
            data: isExist
        })
}



module.exports = {addTransaction, editTransaction, deleteTransaction, allTransactions};