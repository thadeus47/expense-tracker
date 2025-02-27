export interface Expense {
    id: number;
    title: string;
    amount: number;
    category: string;
    user_id?: string;
  }