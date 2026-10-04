"use client";

import { useEffect, useState, type ReactNode } from "react";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Clipboard API blocked (e.g. insecure context): fall back to a hidden textarea.
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.cssText = "position:fixed;opacity:0";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    el.remove();
    return ok;
  }
}

export function CopyButton({
  text,
  label,
  icon,
  className,
}: {
  text: string;
  label: string;
  icon: ReactNode;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  return (
    <button
      type="button"
      title={`Copy ${text}`}
      className={className}
      onClick={async () => setCopied(await copyText(text))}
    >
      {icon}
      <span aria-live="polite">{copied ? "Copied!" : label}</span>
    </button>
  );
}
