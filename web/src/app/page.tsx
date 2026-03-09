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
          {totalTools}+ tools across {categories.length} categories &middot; work in progress
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
          Cool{" "}
          <span className="bg-gradient-to-r from-accent-light to-purple-400 bg-clip-text text-transparent">
            AI tools
          </span>
          {" "}in one place
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
          You know that feeling when a friend shows you their setup and it&apos;s way
          better than yours? So I started putting everything in one place — the
          tools, the stacks, the workflows.
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

          {/* Learning Paths card */}
          <Link
            href="/learning-paths"
            className="glass-card rounded-xl p-5 group border-accent/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-light group-hover:bg-accent/20 transition-colors">
                <CategoryIcon icon="GraduationCap" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">
                  Learning Paths
                </h3>
                <p className="text-xs text-muted">28 challenges</p>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed line-clamp-2">
              Concrete things to build and explore if you want to learn AI tools.
            </p>
          </Link>
        </div>
      </section>

      {/* Quick stats */}
      <section className="pb-16">
        <div className="glass-card rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-2">Where to start</h2>
          <p className="text-sm text-muted mb-6">There are gaps, things that are out of date, and whole categories that probably need to exist but don&apos;t yet. But here&apos;s the idea:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "New to AI?",
                desc: "Check out Learning Paths — concrete challenges from beginner to advanced.",
              },
              {
                label: "Building something?",
                desc: "Browse Stack Recipes for opinionated starter architectures.",
              },
              {
                label: "Just browsing?",
                desc: "Explore the categories above and see what catches your eye.",
              },
              {
                label: "Got something good?",
                desc: "This needs a lot of help. Open a PR if you know a tool that should be here.",
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
