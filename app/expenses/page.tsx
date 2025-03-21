
import { Suspense } from "react";
import ExpenseFetcher from "@/app/components/ExpenseFetcher";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import ExpenseForm from "@/app/components/ExpenseForm";

const Expenses =  () => {
  
  return (
    <div className="flex-col items-center justify-center p-24 text-center2.5">
     <h1 className="text-3xl font-bold text-gray-800 mb-4">Expense List</h1>
     <ExpenseForm /> 
      <p className="text-gray-600 mb-4">Here are your expenses:</p>
      <ErrorBoundary
        fallback={<p className="text-red-600">Error loading expenses.</p>}
      >
        <Suspense
          fallback={<div className="text-gray-600 animate-pulse ">Loading expenses...</div>}
        >
          <ExpenseFetcher />
        </Suspense>
      </ErrorBoundary>
      
    </div>
  )
}

export default Expenses;