import { createServerClient } from "@/lib/superbase";
import { updateExpense } from "@/app/expenses/action";
import Link from "next/link";

// creates an async component that receives an expense ID through params.
const EditExpense = async ({ params }: { params: { id: string } }) => {
  // fetches the specific expense data from Supabase using the provided ID.
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("expenses")
    .select("*")
    .eq("id", parseInt(params.id))
    .single();

  if (error || !data) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Edit Expense</h1>
        <p className="text-red-600">Expense not found or error occurred.</p>
      </div>
    );
  }

  console.log("Fetched data:", data); // Debug: Check category value

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Edit Expense</h1>
      <p>Current category: {data.category}</p> {/* Debug: Show on page */}
      <form action={updateExpense} className="space-y-4 max-w-md mx-auto">
        <input type="hidden" name="id" value={data.id} />
        <div>
          <label htmlFor="title" className="block text-gray-700">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            defaultValue={data.title}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="amount" className="block text-gray-700">Amount</label>
          <input
            id="amount"
            name="amount"
            type="number"
            defaultValue={data.amount}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-gray-700">Category</label>
          <select
            id="category"
            name="category"
            defaultValue={data.category}
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
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
        >
          Save Changes
        </button>
      </form>
      <Link
        href="/expenses"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Back to Expenses
      </Link>
    </div>
  );
};

export default EditExpense;
