const {fetchExpenses, addExpenses, deleteExpenses} = require('../Controllers/ExpenseController');
const router = require('express').Router();

// fetch all expenses based on user's user_id
router.get('/', fetchExpenses);
// add expenses
router.post('/', addExpenses);
// delete expense
router.delete('/:expenseId', deleteExpenses);

module.exports = router;