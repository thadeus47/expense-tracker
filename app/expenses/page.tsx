import ExpenseList from "../components/ExpenseList";
import { Expense } from "@/types/expense";

const Expenses = () => {
    const expenses =  [
        {id: 1, title: "Lunch", amount: 10, category: "food"},
        {id: 2, title: "Bus Fare", amount: 2.5, category: "Travel"},
        {id: 3, title: "Electricity Bill", amount: 75, category: "Bills"}
    ]
  return (
    <div className="flex-col items-center justify-center p-24">
     <h1 className="text-3xl font-bold text-gray-800 mb-4">Expense List</h1>
      <p className="text-gray-600 mb-4">Here are your expenses:</p>
      <ExpenseList expenses={expenses} />
       {/* Table */}
      {/* <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-3 text-left font-semibold">Title</th>
            <th className="p-3 text-left font-semibold">Amount</th>
            <th className="p-3 text-left font-semibold">Category</th>
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
              <td className="p-3 text-gray-800">{expense.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div> */}
         {/* Card*/}
        {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
      </div> */}
    </div>
  )
}

export default Expenses;