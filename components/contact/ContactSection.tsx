import { Mail, Github, Facebook } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section
      id="contact-section"
      className="w-full min-h-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(to bottom, #13151A 0%, #1A1D25 53%, #13151A 100%)",
      }}
    >
      <div className="max-width w-full grid gap-10 md:gap-16 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start md:items-center px-6 md:px-0">
        {/* Left: form card (uses ContactForm for logic + same styling) */}
        <div className="contact-card w-full p-8 md:p-10 lg:p-12 flex flex-col gap-6 md:gap-8">
          <ContactForm />
        </div>

        {/* Right: copy + contact card */}
        <div className="flex flex-col gap-8 md:gap-10 text-white/85">
          <div className="space-y-4">
            <h3
              className="text-[22px] md:text-[26px] font-semibold"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Let's collaborate.
            </h3>
            <p className="text-[14px] md:text-[15px] leading-relaxed max-w-md">
              If you have an idea, a project, or simply want to connect,
              feel free to reach out anytime.
            </p>
          </div>

          <div className="contact-card w-full px-6 py-6 md:px-8 md:py-7 flex flex-col gap-4 md:gap-5 text-[14px] md:text-[15px]">
            <div className="flex items-center gap-3 md:gap-4">
              <Mail className="h-4 w-4 md:h-5 md:w-5 text-red-400" />
              <a
                href="mailto:nguyenha17022005@gmail.com"
                className="text-white/85 hover:text-white link-underline-hero"
              >
                nguyenha17022005@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <Github className="h-4 w-4 md:h-5 md:w-5 text-slate-200" />
              <a
                href="https://github.com/river-tech"
                target="_blank"
                rel="noreferrer"
                className="text-white/85 hover:text-white link-underline-hero"
              >
                github.com/river-tech
              </a>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <Facebook className="h-4 w-4 md:h-5 md:w-5 text-sky-400" />
              <a
                href="https://www.facebook.com/nguyen.ha.711053"
                target="_blank"
                rel="noreferrer"
                className="text-white/85 hover:text-white link-underline-hero"
              >
                facebook.com/nguyen.ha.711053
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

