import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight
} from "lucide-react";
import { MorphingText } from "./ui/morphing-text";

export default function Badge() {
  return (
    <div className="fixed bottom-6 right-6 z-50 cursor-pointer">
      <div
        className="
          group
          relative
          w-[260px]
          h-[58px]
          hover:h-[300px]
          transition-[height]
          duration-500
          ease-[cubic-bezier(.22,1,.36,1)]
          overflow-hidden
          rounded-2xl
          bg-white/10
          backdrop-blur-2xl
          border border-white/20
          shadow-[0_20px_50px_rgba(0,0,0,0.25)]
        "
      >
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="h-[58px] px-5 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white leading-tight">
              Built by <span className="font-bold">James</span>
            </span>
            <span className="text-[11px] text-white/60">
              Software Engineer
            </span>
          </div>

          <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
        </div>

        <div
          className="
            px-5 pt-4
            space-y-6
            opacity-0
            translate-y-4
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-500
            delay-100
          "
        >
        <div className="text-[13px] leading-relaxed text-white/80 font-medium whitespace-nowrap">
            <span className="mr-1">I build</span>
            <MorphingText
                texts={["Blockchains", "Backends", "Frontends", "Smart Contracts", "Websites"]}
            />
        </div>


          <div className="flex gap-3">
            <Social href="https://github.com/prince0495">
              <Github size={18} />
            </Social>
            <Social href="https://www.linkedin.com/in/princejamesnagar">
              <Linkedin size={18} />
            </Social>
            <Social href="https://x.com/jamesnagar007">
              <Twitter size={18} />
            </Social>
            <Social href="mailto:jamesnagar11@gmail.com ">
              <Mail size={18} />
            </Social>
          </div>

          <a
            href="https://linkedin.com/in/princejamesnagar"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/cta
              flex items-center justify-between
              w-full
              rounded-xl
              bg-white
              px-4 py-3
              text-sm font-semibold text-black
              hover:scale-[1.02]
              transition-transform
            "
          >
            <span>Hire Me</span>
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

function Social({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center justify-center
        h-10 w-10
        rounded-xl
        bg-white/10
        text-white
        hover:bg-white/20
        hover:scale-105
        transition-all
      "
    >
      {children}
    </a>
  );
}