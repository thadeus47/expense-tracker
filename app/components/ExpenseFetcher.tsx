import { createServerClient } from "@/lib/superbase";
import ExpenseList from "@/app/components/ExpenseList";
import { Expense } from "@/types/expense";

const ExpenseFetcher = async () => {
  try {
    const supabase = createServerClient();
    const { data, error } = await supabase.from("expenses").select("*");

    if (error) {
      console.error("Supabase fetch error details:", JSON.stringify(error, null, 2));
      return <div>Error fetching expenses: {error.message || "Unknown error"}</div>;
    }

    const expenses: Expense[] = data || [];
    return <ExpenseList expenses={expenses} />;
  } catch (err: unknown) {
    console.error("Unexpected fetch error:", err);
    return <div>Failed to load expenses: {err instanceof Error ? err.message : "Unknown error"}</div>;
  }
};
export default ExpenseFetcher;