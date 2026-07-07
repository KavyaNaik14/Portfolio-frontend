import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center container-px text-center bg-ink text-paper">
      <p className="font-mono text-sm text-amber-accent">Error 404</p>
      <h1 className="mt-2 font-display text-4xl font-bold">Route not found</h1>
      <p className="mt-3 max-w-md text-paper/60">
        Looks like this path doesn't exist. Let's get you back to the homepage.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </div>
  );
}
