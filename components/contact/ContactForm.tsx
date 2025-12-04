"use client";

import * as React from "react";
import { sendEmail } from "@/app/actions/sendEmail";

export function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(false);
    setError(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail.includes("@") || !trimmedMessage) {
      setError("Please fill out all all fields");
      return;
    }

    setLoading(true);
    try {
      const res = await sendEmail({
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
      });

      if (!res.success) {
        setError(res.error || "Something went wrong. Please try again.");
        return;
      }

      setDone(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6">
      <label className="flex flex-col gap-2 text-[13px] md:text-[14px] text-white/70">
        <span>What can I call you?</span>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="soft-input w-full px-5 py-3 md:py-3.5 text-[14px] md:text-[15px] bg-white/95 text-slate-900 placeholder:text-slate-400 focus:outline-none"
        />
      </label>

      <label className="flex flex-col gap-2 text-[13px] md:text-[14px] text-white/70">
        <span>Your email address</span>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="soft-input w-full px-5 py-3 md:py-3.5 text-[14px] md:text-[15px] bg-white/95 text-slate-900 placeholder:text-slate-400 focus:outline-none"
        />
      </label>

      <label className="flex flex-col gap-2 text-[13px] md:text-[14px] text-white/70">
        <span>How can I help you? Share anything you'd like …</span>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your idea, project, or question."
          rows={5}
          className="soft-input w-full px-5 py-3 md:py-3.5 text-[14px] md:text-[15px] bg-white/98 text-slate-900 placeholder:text-slate-400 resize-none focus:outline-none"
        />
      </label>

      {error && (
        <p className="text-xs md:text-sm text-red-400">{error}</p>
      )}
      {done && !error && (
        <p className="text-xs md:text-sm text-emerald-400">
          Message sent. Thank you for reaching out.
        </p>
      )}

      <div className="mt-4 flex items-center justify-center">
        <button
          type="submit"
          disabled={loading}
          className="text-[18px] md:text-[20px] text-white/85 hover:text-white inline-flex items-center gap-3 disabled:opacity-60 disabled:pointer-events-none"
          style={{ fontFamily: "var(--font-crimson), serif" }}
          data-cursor="hover"
        >
          <span className="link-underline-hero">
            {loading ? "Sending…" : "Contact me !"}
          </span>
        </button>
      </div>
    </form>
  );
}

