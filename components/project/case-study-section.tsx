interface CaseStudySectionProps {
  title: string;
  children: React.ReactNode;
}

export function CaseStudySection({
  title,
  children,
}: CaseStudySectionProps) {
  return (
    <section className="mt-16">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight">
          {title}
        </h2>

        <div className="mt-2 h-px w-full bg-border" />
      </div>

      <div className="text-muted-foreground leading-8">
        {children}
      </div>
    </section>
  );
}