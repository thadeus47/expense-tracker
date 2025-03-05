"use client";

import { signIn } from "@/app/api/auth/[...nextauth]/route";

const SignInPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Sign In to Expense Tracker
        </h1>
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/expenses" });
          }}
          className="space-y-4"
        >
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12.545,10.917v3.417h5.695c-.227,1.474-1.695,4.317-5.695,4.317c-3.427,0-6.208-2.833-6.208-6.333 c0-3.5,2.781-6.333,6.208-6.333c1.533,0,2.938,0.542,4.021,1.458l2.825-2.825C17.188,2.917,14.938,2,12.545,2 C7.021,2,2.545,6.476,2.545,12c0,5.524,4.476,10,10,10c5.524,0,10-4.476,10-10c0-0.682-0.068-1.35-0.204-2H12.545z"
              />
            </svg>
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;