import { motion } from "framer-motion";

function SectionLayout({ id, index, label, title, description, children }) {
  return (
    <motion.section
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 border-t border-line/80 py-16 sm:py-20 lg:py-24"
      id={id}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <div className="mb-10 grid gap-5 sm:mb-12 sm:grid-cols-[7rem_1fr] sm:gap-10">
          <p className="pt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-accent/80">
            {index}
          </p>
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              {label}
            </p>
            <h2
              className="text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl"
              id={`${id}-title`}
            >
              {title}
            </h2>
            {description && (
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                {description}
              </p>
            )}
          </div>
        </div>
        <div className="sm:ml-[calc(7rem+2.5rem)]">{children}</div>
      </div>
    </motion.section>
  );
}

export default SectionLayout;
