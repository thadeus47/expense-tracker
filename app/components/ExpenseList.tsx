'use client';
import { Expense } from "@/types/expense"; 

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList = ({ expenses }: ExpenseListProps) => {
  return (
   <div className="overflow-x-auto">
    <table className="w-full border-collapse bg-white shadow-md rounded-lg">
        <thead>
            <tr className="bg-blue-600 text-white">
                <th className="p-3 text-left font-semibold">Title</th>
                <th className="p-3 text-left font-semibold">Amount</th>
                <th className="p-3 text-left font-semibold">Category</th>
            </tr>
        </thead>
        <tbody>
            {expenses.map((expense, index) =>(
                <tr
                  key={expense.id}
                  className={index % 2 ===0 ? 'bg-gray-50' : 'bg-white'}
                >
                    <th className="p-3 text-gray-800">{expense.id}</th>
                    <th className="p-3 text-gray-800">{expense.amount}</th>
                    <th className="p-3 text-gray-800">{expense.category}</th>
                </tr>
            ))}
        </tbody>
    </table>
    <div className="flex-col items-center justify-center p-24"></div>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {expenses.map((expense) => (
          <div
            key={expense.id}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-800">{expense.title}</h3>
            <p className="text-gray-600">${expense.amount}</p>
            <p className="text-gray-500">{expense.category}</p>
          </div>
          ))}
      </div>
   </div>
  
  )
}

export default ExpenseList