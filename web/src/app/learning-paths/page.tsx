import { getLearningPaths } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, GraduationCap, ExternalLink } from "lucide-react";

export default function LearningPathsPage() {
  const sections = getLearningPaths();
  const totalChallenges = sections.reduce(
    (sum, s) => sum + s.challenges.length,
    0
  );

  return (
    <div>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Atlas
      </Link>

      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent-light">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Learning Paths
            </h1>
            <p className="text-muted">{totalChallenges} challenges</p>
          </div>
        </div>
        <p className="text-lg text-muted max-w-3xl">
          Stuff to actually try if you want to learn AI tools. Not tutorials —
          just concrete things to build and explore. Pick something that looks
          interesting, do it, and move on to the next one.
        </p>
      </div>

      <div className="space-y-12">
        {sections.map((section) => (
          <section key={section.name}>
            <h2 className="text-xl font-semibold mb-4 text-foreground/90">
              {section.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.challenges.map((challenge) => (
                <div
                  key={challenge.title}
                  className="glass-card rounded-xl p-5 group"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-semibold text-foreground text-sm leading-snug">
                      {challenge.title}
                    </h3>
                    {challenge.link && (
                      <a
                        href={challenge.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent-light transition-colors shrink-0"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {challenge.whatItIs && (
                    <p className="text-sm text-muted mb-3 leading-relaxed">
                      {challenge.whatItIs}
                    </p>
                  )}

                  {challenge.whyItMatters && (
                    <div className="mb-3">
                      <p className="text-xs font-medium text-accent-light mb-1">
                        Why it matters
                      </p>
                      <p className="text-sm text-muted/80 leading-relaxed">
                        {challenge.whyItMatters}
                      </p>
                    </div>
                  )}

                  {challenge.bestFor && (
                    <div className="mb-3">
                      <p className="text-xs font-medium text-accent-light mb-1">
                        Best for
                      </p>
                      <p className="text-sm text-muted/80">
                        {challenge.bestFor}
                      </p>
                    </div>
                  )}

                  {challenge.bestPairedWith.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border">
                      {challenge.bestPairedWith.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center px-2 py-0.5 rounded-md text-xs bg-accent/10 text-accent-light border border-accent/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
