import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <h1 className="text-4xl font-black tracking-tighter text-slate-700 dark:text-slate-200">About Page</h1>
      <Link href="/" className="text-sm text-blue-500 underline-offset-2 hover:underline">
        Go Home Page
      </Link>
    </main>
  );
}
