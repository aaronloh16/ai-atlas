import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Atlas — Cool AI tools in one place",
  description:
    "A collection of cool AI tools, frameworks, and workflows. Work in progress — contributions welcome.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className="antialiased min-h-screen"
      >
        <div className="gradient-mesh" />

        {/* Navigation */}
        <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20 text-accent-light">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <span className="text-lg font-semibold tracking-tight">
                  AI Atlas
                </span>
              </Link>
              <div className="flex items-center gap-6">
                <Link
                  href="/"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Explore
                </Link>
                <Link
                  href="/stacks"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Stacks
                </Link>
                <Link
                  href="/learning-paths"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Learn
                </Link>
                <a
                  href="https://github.com/aaronloh16/ai-atlas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-border mt-16 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
              <p>
                AI Atlas — Very much a work in progress.
              </p>
              <p>
                MIT License
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
