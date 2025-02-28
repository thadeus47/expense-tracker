"use server";

import { createServerClient } from "@/lib/superbase";
import { redirect } from "next/navigation";

export const addExpense = async (formData: FormData) => {
  // defines an async server action that takes formData as input and returns a Promise.
  const title = formData.get("title") as string;
  const amount = parseFloat(formData.get("amount") as string);
  const category = formData.get("category") as string;

  // Basic validation
  if (!title || title.trim() === "") {
    throw new Error("Title is required.");
  }
  if (isNaN(amount) || amount <= 0) {
    throw new Error("Amount must be a positive number.");
  }
  if (!category || category.trim() === "") {
    throw new Error("Category is required.");
  }

  //  creates a Supabase client and inserts the new expense data.
  const supabase = createServerClient();
  const { error } = await supabase
    .from("expenses")
    .insert({ title, amount, category });

  if (error) {
    throw new Error("Failed to add expense: " + error.message);
  }

  redirect("/expenses"); // Redirect to list after success
};

export const deleteExpense = async (formData: FormData) => {
    // ensures we have a valid numeric ID before proceeding with deletion.
    const id = parseInt(formData.get("id") as string);
    if (isNaN(id)) {
      throw new Error("Invalid expense ID.");
    }
    // creates a Supabase client and deletes the expense record matching the ID.
    const supabase = createServerClient();
    const { error } = await supabase
      .from("expenses")
      .delete()
      .eq("id", id);
  
    if (error) {
      throw new Error("Failed to delete expense: " + error.message);
    }
  
    redirect("/expenses");
  };
  