'use client';
import { useState } from "react";

const NewExpense = () => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
  return (
    <div className="flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Add New Expense</h1>
      <form action="" className="space-y-4 max-w-md mx-auto">
        <div >
            <label htmlFor="title" className="block text-gray-700">Title</label>
            <input 
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
        </div>
        <div>
          <label htmlFor="amount" className="block text-gray-700">Amount</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-gray-700">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a category</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Bills">Bills</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Expense
        </button>
      </form>
    </div>
  )
}

export default NewExpense