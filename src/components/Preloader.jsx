import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/95 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-cyan-400/30 border-t-cyan-400" />
        <p className="text-sm uppercase tracking-[0.35em] text-slate-300">Loading portfolio</p>
      </div>
    </div>
  );
}
