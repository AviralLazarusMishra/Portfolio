import {
  ArrowUpRight,
  Globe,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import SectionLayout from "../components/SectionLayout.jsx";
import { portfolioContent } from "../data/portfolio.js";

function ContactSection() {
  const { contact } = portfolioContent;
  const contactMethods = [
    {
      label: "Email",
      value: contact.email,
      href: contact.emailHref,
      Icon: Mail,
      external: false,
    },
    {
      label: "Phone",
      value: contact.phone,
      href: contact.phoneHref,
      Icon: Phone,
      external: false,
    },
    {
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: contact.linkedin,
      Icon: Linkedin,
      external: true,
    },
    {
      label: "GitHub",
      value: "Explore repositories",
      href: contact.github,
      Icon: Github,
      external: true,
    },
    {
      label: "Portfolio",
      value: "Visit portfolio",
      href: contact.liveSite,
      Icon: Globe,
      external: true,
    },
  ];

  return (
    <SectionLayout
      id="contact"
      index="08 / CONTACT"
      label="Contact"
      title="Let’s connect."
      description="Reach out by email or phone, or find me on my professional profiles."
    >
      <p className="mb-5 inline-flex items-center gap-2 text-xs text-muted">
        <MapPin aria-hidden="true" className="text-accent/80" size={15} />
        {contact.location}
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {contactMethods.map(({ label, value, href, Icon, external }) => (
          <a
            className="group rounded-2xl border border-line bg-panel/55 p-5 transition hover:border-accent/35 hover:bg-panel sm:p-6"
            href={href}
            key={label}
            rel={external ? "noreferrer" : undefined}
            target={external ? "_blank" : undefined}
          >
            <div className="flex items-center justify-between">
              <Icon
                aria-hidden="true"
                className="text-accent/80"
                size={18}
              />
              <ArrowUpRight
                aria-hidden="true"
                className="text-muted transition group-hover:text-accent"
                size={14}
              />
            </div>
            <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
              {label}
            </p>
            <p className="mt-2 break-all text-sm font-medium text-copy">
              {value}
            </p>
          </a>
        ))}
      </div>
      <a
        className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-ink transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        href={contact.emailHref}
      >
        Send an email
        <ArrowUpRight aria-hidden="true" size={15} />
      </a>
    </SectionLayout>
  );
}

export default ContactSection;
