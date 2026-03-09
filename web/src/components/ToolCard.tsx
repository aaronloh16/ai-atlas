import { Tool } from "@/lib/data";
import { ExternalLink } from "lucide-react";

function ConfidenceBadge({ confidence }: { confidence?: string }) {
  if (!confidence) return null;
  const level = confidence.toLowerCase();
  const badgeClass =
    level === "high"
      ? "badge-high"
      : level === "medium"
        ? "badge-medium"
        : "badge-low";

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${badgeClass}`}
    >
      {confidence}
    </span>
  );
}

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="glass-card rounded-xl p-5 group">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          <h3 className="font-semibold text-foreground truncate">
            {tool.name}
          </h3>
          {tool.category && (
            <p className="text-xs text-muted mt-0.5">{tool.category}</p>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <ConfidenceBadge confidence={tool.confidence} />
          <a
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent-light transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {tool.whatItIs && (
        <p className="text-sm text-muted mb-3 leading-relaxed">
          {tool.whatItIs}
        </p>
      )}

      {tool.whyItMatters && (
        <div className="mb-3">
          <p className="text-xs font-medium text-accent-light mb-1">
            Why it matters
          </p>
          <p className="text-sm text-muted/80 leading-relaxed">
            {tool.whyItMatters}
          </p>
        </div>
      )}

      {tool.bestFor && (
        <div className="mb-3">
          <p className="text-xs font-medium text-accent-light mb-1">
            Best for
          </p>
          <p className="text-sm text-muted/80">{tool.bestFor}</p>
        </div>
      )}

      {tool.bestPairedWith.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border">
          {tool.bestPairedWith.map((t) => (
            <span
              key={t}
              className="inline-flex items-center px-2 py-0.5 rounded-md text-xs bg-accent/10 text-accent-light border border-accent/20"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {(tool.caveats || tool.lastVerified) && (
        <div className="mt-3 pt-3 border-t border-border space-y-1">
          {tool.caveats && (
            <p className="text-xs text-muted/60 leading-relaxed">
              <span className="text-warning/60">Caveat:</span> {tool.caveats}
            </p>
          )}
          {tool.lastVerified && (
            <p className="text-xs text-muted/40">
              Verified: {tool.lastVerified}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
