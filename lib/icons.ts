import {
  BookOpen,
  PenTool,
  LayoutTemplate,
  Rocket,
  Sparkles,
  Megaphone,
  MonitorSmartphone,
  Compass,
  Headphones,
  Scale,
  CalendarHeart,
  Feather,
  Lightbulb,
  PencilLine,
  ScrollText,
  BadgeCheck,
  Users,
  TrendingUp,
  ShieldCheck,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

/**
 * Central icon registry. Data files reference icons by string key so they stay
 * serializable; UI resolves the key to a component here.
 */
export const iconMap: Record<string, LucideIcon> = {
  editorial: PencilLine,
  ghostwriting: Feather,
  design: LayoutTemplate,
  publishing: Rocket,
  branding: Sparkles,
  marketing: Megaphone,
  "web-technology": MonitorSmartphone,
  coaching: Compass,
  audiobooks: Headphones,
  rights: Scale,
  events: CalendarHeart,
  // Journey + generic
  idea: Lightbulb,
  writing: PenTool,
  editing: PencilLine,
  publish: Rocket,
  growth: TrendingUp,
  book: BookOpen,
  manuscript: ScrollText,
  verified: BadgeCheck,
  users: Users,
  shield: ShieldCheck,
  handshake: HeartHandshake,
};

export function getIcon(key: string): LucideIcon {
  return iconMap[key] ?? BookOpen;
}
