import { getAllCategories, getAllTools } from "@/lib/data";
import { CategoryIcon } from "@/components/CategoryIcon";
import Link from "next/link";
import { HomeClient } from "./HomeClient";

export default function Home() {
  const categories = getAllCategories();
  const allTools = getAllTools();
  const totalTools = allTools.length;

  return (
    <div>
      {/* Hero */}
      <section className="text-center py-16 sm:py-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light border border-accent/20 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
          {totalTools} tools tracked across {categories.length} categories
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
          Navigate the{" "}
          <span className="bg-gradient-to-r from-accent-light to-purple-400 bg-clip-text text-transparent">
            AI Ecosystem
          </span>
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
          A curated map of the tools, frameworks, protocols, and workflows that
          matter for building with AI. Signal over noise.
        </p>
        <HomeClient categories={categories} allTools={allTools} />
      </section>

      {/* Category Grid */}
      <section className="pb-16">
        <h2 className="text-2xl font-semibold mb-8">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="glass-card rounded-xl p-5 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-light group-hover:bg-accent/20 transition-colors">
                  <CategoryIcon icon={category.icon} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted">
                    {category.tools.length}{" "}
                    {category.tools.length === 1 ? "tool" : "tools"}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed line-clamp-2">
                {category.description}
              </p>
            </Link>
          ))}

          {/* Stacks card */}
          <Link
            href="/stacks"
            className="glass-card rounded-xl p-5 group border-accent/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-light group-hover:bg-accent/20 transition-colors">
                <CategoryIcon icon="Package" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">
                  Stack Recipes
                </h3>
                <p className="text-xs text-muted">Starter architectures</p>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed line-clamp-2">
              Opinionated starter stacks for common AI builder goals.
            </p>
          </Link>
        </div>
      </section>

      {/* Quick stats */}
      <section className="pb-16">
        <div className="glass-card rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-6">Why AI Atlas?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Curated for signal",
                desc: "Every entry is reviewed for evidence and relevance, not bulk-added.",
              },
              {
                label: "Canonical links",
                desc: "Direct links to official docs and repos, not copied summaries.",
              },
              {
                label: "Ecosystem context",
                desc: "Tool relationships, stack fit, and pairing recommendations.",
              },
              {
                label: "Freshness tracked",
                desc: "Evidence windows and verification dates on every entry.",
              },
            ].map((item) => (
              <div key={item.label}>
                <h3 className="font-medium text-foreground text-sm mb-1">
                  {item.label}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
