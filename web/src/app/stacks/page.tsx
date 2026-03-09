import { getStackRecipes } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, Package } from "lucide-react";

function parseStackContent(content: string) {
  const sections: { title: string; items: string[] }[] = [];
  let currentTitle = "";
  let currentItems: string[] = [];

  const lines = content.split("\n");
  let skipTitle = true;

  for (const line of lines) {
    if (line.startsWith("# ") && skipTitle) {
      skipTitle = false;
      continue;
    }

    if (line.startsWith("## ")) {
      if (currentTitle) {
        sections.push({ title: currentTitle, items: [...currentItems] });
      }
      currentTitle = line.replace("## ", "").trim();
      currentItems = [];
    } else if (line.startsWith("- ")) {
      currentItems.push(line.slice(2).trim());
    } else if (line.trim() && !line.startsWith("#")) {
      currentItems.push(line.trim());
    }
  }

  if (currentTitle) {
    sections.push({ title: currentTitle, items: [...currentItems] });
  }

  return sections;
}

const STACK_ICONS: Record<string, string> = {
  "ai-coding-stack": "Terminal-first and IDE-first coding stacks",
  "build-an-agent": "Multi-step autonomous task execution",
  "local-ai-stack": "Privacy-friendly local-first AI setup",
  "rag-stack": "Ground responses in your own data",
  "voice-ai-stack": "Realtime conversational voice products",
  "eval-stack": "Testing, monitoring, and reliability",
};

export default function StacksPage() {
  const stacks = getStackRecipes();

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
            <Package className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Stack Recipes
            </h1>
            <p className="text-muted">{stacks.length} starter architectures</p>
          </div>
        </div>
        <p className="text-lg text-muted max-w-3xl">
          Opinionated starter stacks for common AI builder goals. Start with the
          smallest workable stack and replace one layer at a time as constraints
          become clear.
        </p>
      </div>

      <div className="space-y-8">
        {stacks.map((stack) => {
          const sections = parseStackContent(stack.content);
          return (
            <div key={stack.slug} className="glass-card rounded-xl p-6">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-foreground">
                  {stack.name}
                </h2>
                {STACK_ICONS[stack.slug] && (
                  <p className="text-sm text-muted mt-1">
                    {STACK_ICONS[stack.slug]}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sections.map((section) => (
                  <div
                    key={section.title}
                    className="bg-background/50 rounded-lg p-4 border border-border"
                  >
                    <h3 className="text-sm font-semibold text-accent-light mb-2">
                      {section.title}
                    </h3>
                    <ul className="space-y-1">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted leading-relaxed"
                        >
                          {item.startsWith("Goal:") ||
                          item.startsWith("Why this works:") ||
                          item.startsWith("When to switch:") ? (
                            <span>
                              <span className="font-medium text-foreground/70">
                                {item.split(":")[0]}:
                              </span>
                              {item.split(":").slice(1).join(":")}
                            </span>
                          ) : (
                            <span className="flex items-start gap-2">
                              <span className="text-accent/40 mt-0.5">
                                &bull;
                              </span>
                              {item}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
