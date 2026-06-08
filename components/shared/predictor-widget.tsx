"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Cpu, Play, RefreshCw, Trophy } from "lucide-react";

// (useEffect eliminado: el auto-ajuste se hace en los onChange handlers)


interface Team {
  id: string;
  name: string;
  rating: number;
  short: string;
  color: string;
}

const teams: Team[] = [
  { id: "mci", name: "Manchester City", rating: 92, short: "MCI", color: "text-sky-500" },
  { id: "ars", name: "Arsenal", rating: 90, short: "ARS", color: "text-red-500" },
  { id: "liv", name: "Liverpool", rating: 91, short: "LIV", color: "text-red-600" },
  { id: "che", name: "Chelsea", rating: 85, short: "CHE", color: "text-blue-600" },
  { id: "mun", name: "Manchester United", rating: 84, short: "MUN", color: "text-red-700" },
  { id: "tot", name: "Tottenham", rating: 83, short: "TOT", color: "text-slate-500" },
  { id: "avl", name: "Aston Villa", rating: 82, short: "AVL", color: "text-purple-700" },
];

export function PredictorWidget() {
  const [homeTeam, setHomeTeam] = useState<string>("mci");
  const [awayTeam, setAwayTeam] = useState<string>("ars");
  const [isPredicting, setIsPredicting] = useState(false);
  const [pipelineStep, setPipelineStep] = useState(0);
  const [prediction, setPrediction] = useState<{
    homeWin: number;
    draw: number;
    awayWin: number;
    analysis: string;
  } | null>(null);

  // Auto-adjust inline: si el nuevo home coincide con away, mover away al primer disponible.
  const handleHomeChange = useCallback((next: string) => {
    setHomeTeam(next);
    if (next === awayTeam) {
      const remaining = teams.find((t) => t.id !== next);
      if (remaining) setAwayTeam(remaining.id);
    }
  }, [awayTeam]);

  const handleAwayChange = useCallback((next: string) => {
    if (next === homeTeam) return; // bloqueado por el <option disabled> de todos modos
    setAwayTeam(next);
  }, [homeTeam]);

  const pipelineMessages = [
    "Descargando historial de enfrentamientos (Web Scraping)...",
    "Calculando variables de forma reciente (Feature Engineering)...",
    "Ejecutando predicción en modelo Gradient Boosting...",
    "Validando métricas y distribuciones probabilísticas...",
  ];

  const handlePredict = () => {
    setIsPredicting(true);
    setPrediction(null);
    setPipelineStep(0);

    // Simulate ML Pipeline Steps
    const interval = setInterval(() => {
      setPipelineStep((prev) => {
        if (prev >= pipelineMessages.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            calculatePrediction();
          }, 400);
          return prev;
        }
        return prev + 1;
      });
    }, 600);
  };

  const calculatePrediction = () => {
    const home = teams.find((t) => t.id === homeTeam)!;
    const away = teams.find((t) => t.id === awayTeam)!;

    // Home advantage adds +4 rating
    const homeScore = home.rating + 4;
    const awayScore = away.rating;
    const total = homeScore + awayScore;

    const baseDraw = 24; // 24% base draw probability
    const homeWinRaw = (homeScore / total) * 100;
    const homeWin = Math.round((homeWinRaw / 100) * (100 - baseDraw));
    const awayWin = 100 - baseDraw - homeWin;

    let analysis = "";
    if (homeWin > awayWin + 10) {
      analysis = `${home.name} es claro favorito jugando en casa. Su modelo de posesión y el diferencial de goles histórico le otorgan una ventaja significativa sobre ${away.name}.`;
    } else if (awayWin > homeWin + 5) {
      analysis = `A pesar de la localía, el modelo favorece a ${away.name} debido a su excelente rendimiento reciente como visitante y solidez defensiva frente al ataque de ${home.name}.`;
    } else {
      analysis = `Encuentro sumamente cerrado. El modelo predice un partido de alta intensidad con alta probabilidad de empate o victoria por la mínima diferencia para cualquiera de los dos.`;
    }

    setPrediction({
      homeWin,
      draw: baseDraw,
      awayWin,
      analysis,
    });
    setIsPredicting(false);
  };

  const homeDetails = teams.find((t) => t.id === homeTeam)!;
  const awayDetails = teams.find((t) => t.id === awayTeam)!;

  return (
    <div className="p-6 rounded-2xl border-2 border-border bg-card/60 backdrop-blur shadow-lg max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 border-b pb-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <Brain className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-foreground">Playground Predictor ML</h3>
          <p className="text-xs text-muted-foreground">
            Interactúa con un simulador en tiempo real de mi modelo de la Premier League.
          </p>
        </div>
      </div>

      {/* Selectors */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
            Local (Home)
          </label>
          <select
            value={homeTeam}
            onChange={(e) => handleHomeChange(e.target.value)}
            disabled={isPredicting}
            className="w-full px-3 py-2 rounded-lg border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
          >
            {teams.map((team) => (
              <option key={team.id} value={team.id} disabled={team.id === awayTeam}>
                {team.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
            Visitante (Away)
          </label>
          <select
            value={awayTeam}
            onChange={(e) => handleAwayChange(e.target.value)}
            disabled={isPredicting}
            className="w-full px-3 py-2 rounded-lg border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
          >
            {teams.map((team) => (
              <option key={team.id} value={team.id} disabled={team.id === homeTeam}>
                {team.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Execute Button */}
      {!isPredicting && !prediction && (
        <button
          onClick={handlePredict}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-md hover:shadow-lg"
        >
          <Play className="w-4 h-4 fill-current" />
          Ejecutar Predicción
        </button>
      )}

      {/* Loading State */}
      <AnimatePresence mode="wait">
        {isPredicting && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-5 rounded-xl border border-dashed flex flex-col items-center gap-4 text-center bg-muted/20"
          >
            <Cpu className="w-8 h-8 text-primary animate-spin" />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">
                Procesando datos del partido...
              </p>
              <motion.p
                key={pipelineStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-muted-foreground font-mono"
              >
                {pipelineMessages[pipelineStep]}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results State */}
      <AnimatePresence>
        {prediction && !isPredicting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            {/* Match Title */}
            <div className="flex justify-between items-center bg-muted/30 p-3 rounded-lg border">
              <span className={`font-bold text-sm ${homeDetails.color}`}>
                {homeDetails.short} (L)
              </span>
              <span className="text-xs text-muted-foreground font-mono">VS</span>
              <span className={`font-bold text-sm ${awayDetails.color}`}>
                {awayDetails.short} (V)
              </span>
            </div>

            {/* Probability Bars */}
            <div className="space-y-4">
              {/* Home Win */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span>Victoria {homeDetails.name}</span>
                  <span className="font-bold">{prediction.homeWin}%</span>
                </div>
                <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${prediction.homeWin}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-emerald-500 rounded-full"
                  />
                </div>
              </div>

              {/* Draw */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span>Empate</span>
                  <span className="font-bold">{prediction.draw}%</span>
                </div>
                <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${prediction.draw}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-slate-400 rounded-full"
                  />
                </div>
              </div>

              {/* Away Win */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span>Victoria {awayDetails.name}</span>
                  <span className="font-bold">{prediction.awayWin}%</span>
                </div>
                <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${prediction.awayWin}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-sky-500 rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Analysis card */}
            <div className="p-4 rounded-xl border-l-4 border-primary bg-primary/5 text-xs text-foreground leading-relaxed">
              <div className="flex items-center gap-1.5 font-bold mb-1">
                <Trophy className="w-3.5 h-3.5 text-primary" /> Analítico de Datos del Modelo
              </div>
              <p>{prediction.analysis}</p>
            </div>

            {/* Reset Button */}
            <button
              onClick={handlePredict}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border hover:bg-secondary text-sm font-medium transition"
            >
              <RefreshCw className="w-4 h-4" />
              Re-entrenar y Predecir otro Partido
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
