export function CaseSplit({
  problem,
  solution,
}: {
  problem: string;
  solution: string;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-6">

      {/* Problem */}
      <div className="p-6 rounded-xl border bg-background/60">
        <h3 className="font-semibold text-red-500 mb-2">Problema</h3>
        <p className="text-muted-foreground">{problem}</p>
      </div>

      {/* Solution */}
      <div className="p-6 rounded-xl border bg-background/60">
        <h3 className="font-semibold text-green-500 mb-2">Solución</h3>
        <p className="text-muted-foreground">{solution}</p>
      </div>

    </div>
  );
}