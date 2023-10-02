import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center">
      <div className="flex min-h-fit items-center gap-6">
        <h1 className="text-9xl font-light tracking-tighter text-slate-600">404</h1>
        <div className="h-36 w-0.5 bg-slate-400"></div>
        <div className="space-y-3">
          <h2 className="text-4xl font-black tracking-tighter text-slate-700">
            Not Found
          </h2>
          <p className="text-slate-500">Pokemon not exists</p>
          <Link
            href="/"
            className="inline-block text-blue-600 underline-offset-4 hover:underline"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
