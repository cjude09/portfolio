"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }
  return <button className="button button-secondary" type="button" onClick={copy}>{copied ? <Check size={17} /> : <Copy size={17} />}{copied ? "Copied" : "Copy email"}</button>;
}
