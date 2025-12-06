export function getTagBorderColor(tag: string) {
  const normalized = tag.toLowerCase();

  if (normalized.includes("next")) return "border-red-500";
  if (normalized.includes("redux")) return "border-indigo-400";
  if (normalized.includes("react native")) return "border-emerald-400";
  if (normalized.includes("react")) return "border-sky-400";
  if (normalized.includes("type")) return "border-sky-500";

  return "border-border";
}

export function getTagTextColor(tag: string) {
  const normalized = tag.toLowerCase();

  if (normalized.includes("next")) return "text-red-100";
  if (normalized.includes("redux")) return "text-indigo-200";
  if (normalized.includes("react native")) return "text-emerald-300";
  if (normalized.includes("react")) return "text-sky-300";
  if (normalized.includes("type")) return "text-sky-200";

  return "text-muted-foreground";
}
