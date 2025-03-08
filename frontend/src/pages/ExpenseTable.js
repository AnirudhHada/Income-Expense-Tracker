import React from "react";

function ExpenseTable({ expenses, handleDeleteExpenses }) {
	return (
		<div className="expense-list">
			{expenses?.map((expense, index) => (
				<div key={index} className="expense-item">
					<button className="delete-button" onClick={() => handleDeleteExpenses(expense._id)}>X</button>
					<div className="expense-description">{expense.text}</div>
					<div className="expense-amount" style={{
                  color: expense.amount > 0 ? '#27ae60' : '#e74c3c'
               }}>{expense.amount}</div>
				</div>
			))}
		</div>
	);
}

export default ExpenseTable;
