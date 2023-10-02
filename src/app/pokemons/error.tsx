"use client";

import { FC, useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const Error: FC<Props> = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-extrabold tracking-tight text-red-600">
          Something went wrong!
        </h2>
        <button
          className="rounded-md bg-slate-600 px-3.5 py-1.5 hover:dark:bg-slate-300 dark:bg-slate-200 dark:text-slate-700"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </main>
  );
};

export default Error;
