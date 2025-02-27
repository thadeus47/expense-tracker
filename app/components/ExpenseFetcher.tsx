import { createServerClient } from "@/lib/superbase";
import ExpenseList from "@/app/components/ExpenseList";
import { Expense } from "@/types/expense";

const ExpenseFetcher =  async () => {
    const supabase = createServerClient();

    const { data, error } = await supabase.from("expenses").select("*");
  
    if (error) {
      throw new Error("Failed to fetch expenses: " + error.message);
    }
  
    const expenses: Expense[] = data || [];
    return <ExpenseList expenses={expenses} />;
}
export default ExpenseFetcher