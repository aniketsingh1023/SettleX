"use client";
import {
  signOut as nextAuthSignOut,
  signIn,
  useSession,
} from "next-auth/react";
import { PrimaryButton } from "./Button";

export const AppBar = () => {
  const { data: session } = useSession();

  function signOut(): void {
    nextAuthSignOut();
  }

  return (
    <nav className="border-b px-4 py-3 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
      <div className="text-2xl font-black text-blue-600 tracking-tight flex items-center gap-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        SettleX
      </div>

      <div>
        {session?.user ? (
          <button
            onClick={() => signOut()}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => signIn()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors"
          >
            Sign in with Google
          </button>
        )}
      </div>
    </nav>
  );
};
