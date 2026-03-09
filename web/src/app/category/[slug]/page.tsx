import { getAllCategories, getCategory } from "@/lib/data";
import { CategoryIcon } from "@/components/CategoryIcon";
import { ToolCard } from "@/components/ToolCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Lightbulb } from "lucide-react";

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) notFound();

  // Group tools by section
  const sections = new Map<string, typeof category.tools>();
  for (const tool of category.tools) {
    const section = tool.section || "Tools";
    if (!sections.has(section)) sections.set(section, []);
    sections.get(section)!.push(tool);
  }

  const allCategories = getAllCategories();

  return (
    <div>
      {/* Breadcrumb */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Atlas
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent-light">
            <CategoryIcon icon={category.icon} className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {category.name}
            </h1>
            <p className="text-muted">
              {category.tools.length}{" "}
              {category.tools.length === 1 ? "tool" : "tools"} tracked
            </p>
          </div>
        </div>
        <p className="text-lg text-muted max-w-3xl">{category.description}</p>
      </div>

      {/* Tools by section */}
      {Array.from(sections.entries()).map(([sectionName, tools]) => (
        <section key={sectionName} className="mb-12">
          <h2 className="text-lg font-semibold mb-4 text-foreground/80">
            {sectionName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </section>
      ))}

      {/* How to choose */}
      {category.howToChoose.length > 0 && (
        <section className="mb-12">
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-accent-light" />
              <h2 className="text-lg font-semibold">How to Choose</h2>
            </div>
            <ul className="space-y-2">
              {category.howToChoose.map((tip, i) => (
                <li
                  key={i}
                  className="text-sm text-muted leading-relaxed pl-4 border-l-2 border-accent/30"
                >
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Related Categories */}
      {category.relatedCategories.length > 0 && (
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Related Categories</h2>
          <div className="flex flex-wrap gap-3">
            {category.relatedCategories.map((relSlug) => {
              const rel = allCategories.find((c) => c.slug === relSlug);
              if (!rel) return null;
              return (
                <Link
                  key={relSlug}
                  href={`/category/${relSlug}`}
                  className="glass-card rounded-xl px-4 py-3 inline-flex items-center gap-2 hover:border-accent/30"
                >
                  <CategoryIcon
                    icon={rel.icon}
                    className="w-4 h-4 text-accent-light"
                  />
                  <span className="text-sm font-medium">{rel.name}</span>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
