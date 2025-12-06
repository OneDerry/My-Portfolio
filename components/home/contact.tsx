"use client";

import { useState } from "react";

export function Contact() {
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    const subject = encodeURIComponent("Portfolio contact");
    const body = encodeURIComponent(`Hi Mesiri,\n\n${message}`);
    window.location.href = `mailto:mesiri.dev@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact" className="flex flex-col gap-6 animate-fade-in-up">
      <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
        Contact
      </h2>
      <form className="grid gap-4 md:max-w-lg">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="name"
            className="text-xs font-medium text-muted-foreground"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="h-9 rounded-md border border-border bg-background px-2 text-sm text-foreground outline-none ring-0 focus:border-ring"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-xs font-medium text-muted-foreground"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="h-9 rounded-md border border-border bg-background px-2 text-sm text-foreground outline-none ring-0 focus:border-ring"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="message"
            className="text-xs font-medium text-muted-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="rounded-md border border-border bg-background px-2 py-2 text-sm text-foreground outline-none ring-0 focus:border-ring"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={handleSendEmail}
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Send email
        </button>
      </form>
    </section>
  );
}
