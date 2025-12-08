export function getTagBorderColor(tag: string) {
  const normalized = tag.toLowerCase();

  if (normalized.includes("next")) return "border-red-500";
  if (normalized.includes("redux")) return "border-indigo-400";
  if (normalized.includes("react native")) return "border-emerald-400";
  if (normalized.includes("react")) return "border-sky-400";
  if (normalized.includes("type")) return "border-sky-500";
      if (normalized.includes("cypress")) return "border-green-400";
  if (normalized.includes("rest")) return "border-orange-400";

  return "border-border";
}

export function getTagTextColor(tag: string) {
  const normalized = tag.toLowerCase();

  if (normalized.includes("next")) return "dark:text-red-100 text-red-800";
  if (normalized.includes("redux"))
    return "dark:text-indigo-200 text-indigo-800";
  if (normalized.includes("react native"))
    return "dark:text-emerald-300 text-emerald-800";
  if (normalized.includes("react")) return "dark:text-sky-300 text-sky-800";
  if (normalized.includes("type")) return "dark:text-sky-200 text-sky-800";
  if (normalized.includes("cypress")) return "dark:text-green-300 text-green-800";
  if (normalized.includes("rest")) return "dark:text-orange-300 text-orange-800";

  return "text-muted-foreground";
}
