"use client";

import { useRef } from "react"; // Use ref instead
import { Expense } from "@/types/expense";
import { deleteExpense } from "@/app/expenses/action";

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList = ({ expenses }: ExpenseListProps) => {
  const formRefs = useRef<Map<number, HTMLFormElement>>(new Map());

  const handleDelete = (id: number) => {
    const expenseTitle = expenses.find(e => e.id === id)?.title;
    if (confirm(`Are you sure you want to delete "${expenseTitle}"?`)) {
      const form = formRefs.current.get(id);
      if (form) form.requestSubmit(); // Trigger form submission
    }
  };

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  if (!expenses.length) {
    return <p className="text-gray-500">No expenses yet.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-3 text-left font-semibold">Title</th>
            <th className="p-3 text-left font-semibold">Amount</th>
            <th className="p-3 text-left font-semibold">Category</th>
            <th className="p-3 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr
              key={expense.id}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="p-3 text-gray-800">{expense.title}</td>
              <td className="p-3 text-gray-800">${expense.amount}</td>
              <td className="p-3 text-gray-800">{expense.category || "None"}</td>
              <td className="p-3">
                <form
                  action={deleteExpense}
                  ref={(el) => {
                    if (el) formRefs.current.set(expense.id, el);
                  }}
                >
                  <input type="hidden" name="id" value={expense.id} />
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(expense.id);
                    }}
                    className="bg-red-600 text-white px-4 py-1 rounded-full hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}        </tbody>
      </table>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg flex justify-between">
        <span className="text-gray-800 font-medium">Total:</span>
        <span className="text-gray-800 font-bold">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ExpenseList;