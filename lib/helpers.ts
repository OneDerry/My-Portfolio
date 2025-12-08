export function getTagBorderColor(tag: string) {
  const normalized = tag.toLowerCase();

  if (normalized.includes("next"))
    return "border-red-500/60 shadow-[0_0_8px_rgba(239,68,68,0.4)]";
  if (normalized.includes("redux"))
    return "border-indigo-400/60 shadow-[0_0_8px_rgba(129,140,248,0.4)]";
  if (normalized.includes("react native"))
    return "border-emerald-400/60 shadow-[0_0_8px_rgba(52,211,153,0.4)]";
  if (normalized.includes("react"))
    return "border-sky-400/60 shadow-[0_0_8px_rgba(56,189,248,0.4)]";
  if (normalized.includes("type"))
    return "border-sky-500/60 shadow-[0_0_8px_rgba(14,165,233,0.4)]";
  if (normalized.includes("cypress"))
    return "border-green-400/60 shadow-[0_0_8px_rgba(74,222,128,0.4)]";
  if (normalized.includes("rest"))
    return "border-orange-400/60 shadow-[0_0_8px_rgba(251,146,60,0.4)]";

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
  if (normalized.includes("cypress"))
    return "dark:text-green-300 text-green-800";
  if (normalized.includes("rest"))
    return "dark:text-orange-300 text-orange-800";

  return "text-muted-foreground";
}
