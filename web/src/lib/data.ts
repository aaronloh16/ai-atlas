import fs from "fs";
import path from "path";

const REPO_ROOT = path.join(process.cwd(), "..");

export interface Tool {
  name: string;
  link: string;
  category: string;
  whatItIs: string;
  whyItMatters: string;
  bestFor: string;
  bestPairedWith: string[];
  evidenceWindow?: string;
  evidenceSources?: string;
  confidence?: string;
  caveats?: string;
  lastVerified?: string;
  section?: string; // e.g. "Top tools", "Honorable mentions"
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  tools: Tool[];
  howToChoose: string[];
  relatedCategories: string[];
  icon: string;
}

export interface StackRecipe {
  slug: string;
  name: string;
  content: string;
}

export interface LearningChallenge {
  title: string;
  link?: string;
  whatItIs?: string;
  whyItMatters?: string;
  bestFor?: string;
  bestPairedWith: string[];
}

export interface LearningSection {
  name: string;
  challenges: LearningChallenge[];
}

const CATEGORY_ICONS: Record<string, string> = {
  "ai-coding-tools": "Code",
  "agent-frameworks": "Bot",
  "autonomous-agents": "Cpu",
  "ai-app-frameworks": "Layout",
  "browser-agents": "Globe",
  "communities": "Users",
  "context-engineering": "Layers",
  "explainers": "BookOpen",
  "external-lists": "ExternalLink",
  "inference-runtimes": "Zap",
  "mcp": "Plug",
  "memory": "Database",
  "observability-evals": "Activity",
  "rag-indexing": "Search",
  "vector-databases": "Box",
  "voice-ai": "Mic",
  stacks: "Package",
};

const CATEGORY_DIRS = [
  "ai-coding-tools",
  "agent-frameworks",
  "autonomous-agents",
  "ai-app-frameworks",
  "browser-agents",
  "communities",
  "context-engineering",
  "explainers",
  "external-lists",
  "inference-runtimes",
  "mcp",
  "memory",
  "observability-evals",
  "rag-indexing",
  "vector-databases",
  "voice-ai",
];

function parseTool(block: string, currentSection: string): Tool | null {
  const nameMatch = block.match(/^## (.+)$/m);
  if (!nameMatch) return null;

  const name = nameMatch[1].trim();

  const getField = (label: string): string => {
    const re = new RegExp(`^- ${label}:\\s*(.+)$`, "m");
    const m = block.match(re);
    return m ? m[1].trim() : "";
  };

  const link = getField("Link");
  if (!link) return null; // skip section headers without links

  return {
    name,
    link,
    category: getField("Category"),
    whatItIs: getField("What it is"),
    whyItMatters: getField("Why it matters"),
    bestFor: getField("Best for"),
    bestPairedWith: getField("Best paired with")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    evidenceWindow: getField("Evidence window") || undefined,
    evidenceSources: getField("Evidence sources") || undefined,
    confidence: getField("Confidence").replace(/\.$/, "") || undefined,
    caveats: getField("Caveats / failure modes") || undefined,
    lastVerified: getField("Last verified").replace(/\.$/, "") || undefined,
    section: currentSection,
  };
}

function parseCategory(slug: string): Category | null {
  const readmePath = path.join(REPO_ROOT, slug, "README.md");
  if (!fs.existsSync(readmePath)) return null;

  const content = fs.readFileSync(readmePath, "utf-8");
  const lines = content.split("\n");

  // Get title and description
  const titleMatch = content.match(/^# (.+)$/m);
  const name = titleMatch ? titleMatch[1] : slug;

  // Description is the first non-empty line after the title
  let description = "";
  let foundTitle = false;
  for (const line of lines) {
    if (line.startsWith("# ")) {
      foundTitle = true;
      continue;
    }
    if (foundTitle && line.trim()) {
      description = line.trim();
      break;
    }
  }

  // Parse tools by splitting on ## headers
  const tools: Tool[] = [];
  const toolBlocks = content.split(/(?=^## )/m);
  let currentSection = "Top tools";

  for (const block of toolBlocks) {
    const headerMatch = block.match(/^## (.+)$/m);
    if (!headerMatch) continue;

    const header = headerMatch[1].trim();

    // Check if this is a section header (no Link field)
    if (
      !block.match(/^- Link:/m) &&
      (header.includes("Top") ||
        header.includes("Honorable") ||
        header.includes("Fast-moving") ||
        header.includes("alternatives"))
    ) {
      currentSection = header;
      continue;
    }

    // Skip non-tool sections
    if (
      header === "Related categories" ||
      header === "How to choose" ||
      header === "Evidence snapshot" ||
      header.startsWith("Evidence snapshot") ||
      header === "Verification status"
    ) {
      continue;
    }

    const tool = parseTool(block, currentSection);
    if (tool) tools.push(tool);
  }

  // Parse "How to choose"
  const howToChoose: string[] = [];
  const chooseMatch = content.match(
    /## How to choose\n\n([\s\S]*?)(?=\n## |\n$|$)/
  );
  if (chooseMatch) {
    const chooseLines = chooseMatch[1].split("\n");
    for (const line of chooseLines) {
      if (line.startsWith("- ")) {
        howToChoose.push(line.slice(2).trim());
      }
    }
  }

  // Parse related categories
  const relatedCategories: string[] = [];
  const relatedMatch = content.match(
    /## Related categories\n\n([\s\S]*?)(?=\n## |\n$|$)/
  );
  if (relatedMatch) {
    const relatedLines = relatedMatch[1].split("\n");
    for (const line of relatedLines) {
      const linkMatch = line.match(/\[(.+?)\]\((.+?)\)/);
      if (linkMatch) {
        const slug = linkMatch[2]
          .replace("../", "")
          .replace("/README.md", "");
        relatedCategories.push(slug);
      }
    }
  }

  return {
    slug,
    name,
    description,
    tools,
    howToChoose,
    relatedCategories,
    icon: CATEGORY_ICONS[slug] || "Folder",
  };
}

export function getAllCategories(): Category[] {
  return CATEGORY_DIRS.map(parseCategory).filter(
    (c): c is Category => c !== null
  );
}

export function getCategory(slug: string): Category | null {
  if (!CATEGORY_DIRS.includes(slug)) return null;
  return parseCategory(slug);
}

export function getAllTools(): Tool[] {
  const categories = getAllCategories();
  return categories.flatMap((c) => c.tools);
}

export function getLearningPaths(): LearningSection[] {
  const readmePath = path.join(REPO_ROOT, "learning-paths", "README.md");
  if (!fs.existsSync(readmePath)) return [];

  const content = fs.readFileSync(readmePath, "utf-8");
  const sections: LearningSection[] = [];
  let currentSection: LearningSection | null = null;

  // Split on ## and ### headers
  const blocks = content.split(/(?=^###? )/m);

  for (const block of blocks) {
    const sectionMatch = block.match(/^## (.+)$/m);
    if (sectionMatch) {
      currentSection = { name: sectionMatch[1].trim(), challenges: [] };
      sections.push(currentSection);
      continue;
    }

    const challengeMatch = block.match(/^### (.+)$/m);
    if (challengeMatch && currentSection) {
      const getField = (label: string): string => {
        const re = new RegExp(`^- ${label}:\\s*(.+)$`, "m");
        const m = block.match(re);
        return m ? m[1].trim() : "";
      };

      const linkField = getField("Link");
      const bestPaired = getField("Best paired with");

      currentSection.challenges.push({
        title: challengeMatch[1].trim(),
        link: linkField || undefined,
        whatItIs: getField("What it is") || undefined,
        whyItMatters: getField("Why it matters") || undefined,
        bestFor: getField("Best for") || undefined,
        bestPairedWith: bestPaired
          ? bestPaired
              .split(",")
              .map((s) => s.replace(/\[|\]|\(.*?\)/g, "").trim())
              .filter(Boolean)
          : [],
      });
    }
  }

  return sections;
}

export function getStackRecipes(): StackRecipe[] {
  const stacksDir = path.join(REPO_ROOT, "stacks");
  const files = fs.readdirSync(stacksDir).filter((f) => f.endsWith(".md") && f !== "README.md");

  return files.map((f) => {
    const content = fs.readFileSync(path.join(stacksDir, f), "utf-8");
    const titleMatch = content.match(/^# (.+)$/m);
    return {
      slug: f.replace(".md", ""),
      name: titleMatch ? titleMatch[1] : f.replace(".md", ""),
      content,
    };
  });
}
