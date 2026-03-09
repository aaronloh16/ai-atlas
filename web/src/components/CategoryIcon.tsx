import {
  Code,
  Bot,
  Cpu,
  Layout,
  Globe,
  Users,
  Layers,
  BookOpen,
  ExternalLink,
  Zap,
  Plug,
  Database,
  Activity,
  Search,
  Box,
  Mic,
  Package,
  Folder,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Bot,
  Cpu,
  Layout,
  Globe,
  Users,
  Layers,
  BookOpen,
  ExternalLink,
  Zap,
  Plug,
  Database,
  Activity,
  Search,
  Box,
  Mic,
  Package,
  Folder,
};

export function CategoryIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const IconComponent = iconMap[icon] || Folder;
  return <IconComponent className={className} />;
}
