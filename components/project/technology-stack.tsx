interface StackItem {
  category: string;
  technology: string;
}

interface TechnologyStackProps {
  stack: StackItem[];
}

export function TechnologyStack({
  stack,
}: TechnologyStackProps) {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {stack.map((item) => (
        <div
          key={`${item.category}-${item.technology}`}
          className="
            rounded-2xl
            border
            p-6
            transition-all
            hover:shadow-md
          "
        >
          <p className="text-sm text-muted-foreground">
            {item.category}
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            {item.technology}
          </h3>
        </div>
      ))}
    </div>
  );
}