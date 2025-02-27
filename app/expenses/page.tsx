import ExpenseList from "../components/ExpenseList";
// import { Expense } from "@/types/expense";
import { supabase } from "@/lib/superbase";
const Expenses = async () => {
     
  const { data, error } = await supabase.from("expenses").select("*");
  console.log("Data:", data, "Error:", error);
    const expenses =  [
        {id: 1, title: "Lunch", amount: 10, category: "food"},
        {id: 2, title: "Bus Fare", amount: 2.5, category: "Travel"},
        {id: 3, title: "Electricity Bill", amount: 75, category: "Bills"}
    ]
  return (
    <div className="flex-col items-center justify-center p-24 text-center2.5">
     <h1 className="text-3xl font-bold text-gray-800 mb-4">Expense List</h1>
      <p className="text-gray-600 mb-4">Here are your expenses:</p>
      <ExpenseList expenses={expenses} />
      
    </div>
  )
}

export default Expenses;