const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    category: {
        type: String,
        required: [true, "category is required"]
    },
    amount: {
        type: Number,
        required: [true, "amount is required"]
    },
    type: {
        type: String,
        required: [true, "Type is required"]
    },
    note: String
}, { timestamps: true })



const expenseModel = mongoose.model("Transaction", expenseSchema);

module.exports = expenseModel;