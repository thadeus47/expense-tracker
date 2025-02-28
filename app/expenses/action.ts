"use server";

import { createServerClient } from "@/lib/superbase";

export const addExpense = async (formData: FormData) => {
  // defines an async server action that takes formData as input and returns a Promise.
  const title = formData.get("title") as string;
  const amount = parseFloat(formData.get("amount") as string);
  const category = formData.get("category") as string;

  //  creates a Supabase client and inserts the new expense data.
  const supabase = createServerClient();
  const { error } = await supabase
    .from("expenses")
    .insert({ title, amount, category });

  if (error) {
    throw new Error("Failed to add expense: " + error.message);
  }
};
