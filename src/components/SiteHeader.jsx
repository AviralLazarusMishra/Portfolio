import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolioContent } from "../data/portfolio.js";

const navigation = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Certifications", "#certifications"],
  ["Achievements", "#achievements"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { contact, profile } = portfolioContent;

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className="sticky top-0 z-50 border-b border-line/70 bg-ink/80 backdrop-blur-xl"
      onKeyDown={(event) => {
        if (event.key === "Escape") closeMenu();
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-6 py-4 sm:px-10 lg:px-12">
        <a
          className="shrink-0 text-sm font-semibold tracking-wide text-white"
          href="#top"
          onClick={closeMenu}
          aria-label={`${profile.name}, home`}
        >
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:flex"
        >
          {navigation.map(([label, href]) => (
            <a
              className="text-[11px] text-muted transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="hidden min-h-10 items-center gap-2 rounded-full bg-accent px-4 text-xs font-semibold text-ink transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:inline-flex"
            href={contact.resume}
            rel="noreferrer"
            target="_blank"
          >
            View résumé
            <ArrowUpRight aria-hidden="true" size={14} />
          </a>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-copy transition hover:border-accent/50 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            {menuOpen ? (
              <X aria-hidden="true" size={18} />
            ) : (
              <Menu aria-hidden="true" size={18} />
            )}
          </button>
        </div>
      </div>

      <nav
        aria-label="Mobile navigation"
        className={`border-t border-line/70 bg-ink/95 px-6 py-4 lg:hidden sm:px-10 ${
          menuOpen ? "block" : "hidden"
        }`}
        id="mobile-navigation"
      >
        <div className="mx-auto grid max-w-6xl gap-1">
          {navigation.map(([label, href]) => (
            <a
              className="rounded-lg px-3 py-3 text-sm text-muted transition hover:bg-white/[0.04] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              href={href}
              key={href}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a
            className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-4 text-sm font-semibold text-ink sm:hidden"
            href={contact.resume}
            onClick={closeMenu}
            rel="noreferrer"
            target="_blank"
          >
            View résumé
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default SiteHeader;
