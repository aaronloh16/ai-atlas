"use client";

import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { ToolCard } from "@/components/ToolCard";
import type { Category, Tool } from "@/lib/data";
import Link from "next/link";

export function HomeClient({
  categories,
  allTools,
}: {
  categories: Category[];
  allTools: Tool[];
}) {
  const [search, setSearch] = useState("");

  const query = search.toLowerCase().trim();
  const filteredTools = query
    ? allTools.filter(
        (t) =>
          t.name.toLowerCase().includes(query) ||
          t.category.toLowerCase().includes(query) ||
          t.whatItIs.toLowerCase().includes(query) ||
          t.bestFor.toLowerCase().includes(query) ||
          t.bestPairedWith.some((p) => p.toLowerCase().includes(query))
      )
    : [];

  const filteredCategories = query
    ? categories.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.description.toLowerCase().includes(query)
      )
    : [];

  return (
    <div className="max-w-2xl mx-auto">
      <SearchBar value={search} onChange={setSearch} />

      {query && (
        <div className="mt-8 text-left">
          {filteredCategories.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-muted mb-3">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {filteredCategories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/category/${c.slug}`}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm bg-accent/10 text-accent-light border border-accent/20 hover:bg-accent/20 transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {filteredTools.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-muted mb-3">
                Tools ({filteredTools.length})
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {filteredTools.slice(0, 12).map((tool) => (
                  <ToolCard key={`${tool.category}-${tool.name}`} tool={tool} />
                ))}
              </div>
              {filteredTools.length > 12 && (
                <p className="text-sm text-muted mt-4 text-center">
                  Showing 12 of {filteredTools.length} results. Refine your
                  search for more specific results.
                </p>
              )}
            </div>
          )}

          {filteredTools.length === 0 && filteredCategories.length === 0 && (
            <p className="text-sm text-muted text-center py-8">
              No results found for &quot;{search}&quot;
            </p>
          )}
        </div>
      )}
    </div>
  );
}
