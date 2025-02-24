import Link from 'next/link';

const  Home = () => {
  return (
     <main className=" flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Expense Tracker</h1>
      <p className="mt-4 text-lg text-gray-600">Start tracking your expenses today!</p>
      <nav className="mt-8">
        <ul className="flex space-x-4">
          <li>
            <Link href="/expenses" className="text-blue-500 hover:underline">
              Expenses
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-500 hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
     </main>
  );
}


export default  Home;