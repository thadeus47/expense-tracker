import ExpenseList from "@/app/components/ExpenseList";
import { Expense } from "@/types/expense";
import { createServerClient } from "@/lib/superbase";
import { Suspense } from "react";
import ExpenseFetcher from "@/app/components/ExpenseFetcher";

const Expenses = async () => {
  const supabase = createServerClient();
  // Simulate a slow network (optional, remove later)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const { data, error } = await supabase.from("expenses").select("*");

  if (error) {
    console.error("Error fetching expenses:", error);
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Expense List</h1>
        <p className="text-red-600">Failed to load expenses. Please try again later.</p>
      </div>
    );
  }

  const expenses: Expense[] = data || [];
  
  return (
    <div className="flex-col items-center justify-center p-24 text-center2.5">
     <h1 className="text-3xl font-bold text-gray-800 mb-4">Expense List</h1>
      <p className="text-gray-600 mb-4">Here are your expenses:</p>
      <Suspense fallback={<p className="text-gray-700">Loading expenses...</p>}>
        <ExpenseFetcher />
      </Suspense>
      
    </div>
  )
}

export default Expenses;