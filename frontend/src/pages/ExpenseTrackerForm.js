import React, { useState } from "react";
import { handleError } from "../utils";

function ExpenseTrackerForm({ addExpenses }) {
	const [expenseInfo, setExpenseInfo] = useState({
		text: "",
		amount: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		const copyExpenseInfo = { ...expenseInfo };
		copyExpenseInfo[name] = value;
		setExpenseInfo(copyExpenseInfo);
	};

	const handleExpense = (e) => {
		e.preventDefault();
		const { text, amount } = expenseInfo;
		if (!text || !amount) {
			handleError("All fileds are required");
			return;
		}
		setTimeout(() => {
			setExpenseInfo({
				text: "",
				amount: "",
			});
		}, 1000);
		addExpenses(expenseInfo);
	};

	return (
		<div className="container">
			<h1>Expense Tracker</h1>
			<form onSubmit={handleExpense}>
				<div>
					<label>Expense Description</label>
					<input
						onChange={handleChange}
						type="text"
						name="text"
						placeholder="Enter your Expense Description..."
						value={expenseInfo.text}
					/>
				</div>
				<div>
					<label>Amount</label>
					<input
						onChange={handleChange}
						type="number"
						name="amount"
						placeholder="Enter your Amount, Expense(-ve) Income(+ve)..."
						value={expenseInfo.amount}
					/>
				</div>
				<button type="submit">Add Expense</button>
			</form>
		</div>
	);
}

export default ExpenseTrackerForm;
