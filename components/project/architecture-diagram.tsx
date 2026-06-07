interface ArchitectureDiagramProps {
  architecture: string[];
}

export function ArchitectureDiagram({
  architecture,
}: ArchitectureDiagramProps) {
  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      {architecture.map((item, index) => (
        <div
          key={item}
          className="flex flex-col items-center"
        >
          <div className="rounded-xl border px-8 py-4">
            {item}
          </div>

          {index !== architecture.length - 1 && (
            <div className="my-2 text-2xl">
              ↓
            </div>
          )}
        </div>
      ))}
    </div>
  );
}