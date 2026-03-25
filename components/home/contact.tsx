"use client";

import { useState } from "react";
import { useSound } from "@/lib/useSound";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const { play: playClick } = useSound("/sounds/click.wav", 0.5);

  const handleSendEmail = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
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
            required
            value={name}
            onChange={(e) => { setName(e.target.value); setErrors((prev) => ({ ...prev, name: undefined })); }}
            className="h-9 rounded-md border border-border bg-background px-2 text-sm text-foreground outline-none ring-0 focus:border-ring"
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
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
            required
            value={email}
            onChange={(e) => { setEmail(e.target.value); setErrors((prev) => ({ ...prev, email: undefined })); }}
            className="h-9 rounded-md border border-border bg-background px-2 text-sm text-foreground outline-none ring-0 focus:border-ring"
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
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
            required
            className="rounded-md border border-border bg-background px-2 py-2 text-sm text-foreground outline-none ring-0 focus:border-ring"
            value={message}
            onChange={(e) => { setMessage(e.target.value); setErrors((prev) => ({ ...prev, message: undefined })); }}
          />
          {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
        </div>
        <button
          type="button"
          onClick={() => {
            playClick();
            handleSendEmail();
          }}
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Send email
        </button>
      </form>
    </section>
  );
}
