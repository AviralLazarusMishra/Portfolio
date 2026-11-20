import { Globe, Github, Linkedin, Mail } from "lucide-react";
import { portfolioContent } from "../data/portfolio.js";

const socialDefinitions = [
  { label: "GitHub", href: "github", Icon: Github, external: true },
  { label: "LinkedIn", href: "linkedin", Icon: Linkedin, external: true },
  { label: "Portfolio", href: "liveSite", Icon: Globe, external: true },
  { label: "Email", href: "emailHref", Icon: Mail, external: false },
];

function SocialLinks({ ariaLabel = "Social links", className = "" }) {
  const { contact } = portfolioContent;

  return (
    <nav aria-label={ariaLabel} className={`flex flex-wrap gap-2 ${className}`}>
      {socialDefinitions.map(({ label, href, Icon, external }) => (
        <a
          className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line/80 px-3.5 text-xs text-muted transition hover:border-accent/50 hover:bg-white/[0.03] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          href={contact[href]}
          key={label}
          rel={external ? "noreferrer" : undefined}
          target={external ? "_blank" : undefined}
        >
          <Icon aria-hidden="true" size={14} />
          {label}
        </a>
      ))}
    </nav>
  );
}

export default SocialLinks;
