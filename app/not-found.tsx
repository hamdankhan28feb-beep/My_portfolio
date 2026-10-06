export default function NotFound() {
  return (
    <div className="pixel-grid flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-2xl md:text-4xl">Page not found.</h1>
      <a href="/" className="pixel-button px-4 py-3 text-xs">
        Home
      </a>
    </div>
  );
}
