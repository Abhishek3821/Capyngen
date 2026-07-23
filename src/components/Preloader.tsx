import { useEffect, useMemo, useRef, useState } from "react";
import logo from "../assets/capyngenLogo.png";

const clamp = (n: number, min: number, max: number): number => Math.max(min, Math.min(max, n));

interface PreloaderState {
  progress?: number | string;
  isComplete?: boolean;
}

interface PreloaderProps {
  state?: PreloaderState;
}

const Preloader = ({ state }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  // ✅ UI text progress (numbers/messages)
  const progress = clamp(Number(state?.progress || 0), 0, 100);

  // ✅ GPU bar refs with strict TypeScript typings
  const barRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<number>(0);
  const currentRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  // ✅ message strictly synced with progress milestones
  const syncedMessage = useMemo(() => {
    if (progress >= 100) return "Ready";
    if (progress >= 75) return "Finalizing assets...";
    if (progress >= 50) return "Securing quantum link...";
    if (progress >= 25) return "Optimizing rendering engine...";
    return "Configuring core modules...";
  }, [progress]);

  /**
   * ✅ Continuous bar fill animation (NO STOPS, NO JITTER)
   * - bar moves every frame (GPU transform)
   * - progress updates from App only set a target
   */
  useEffect(() => {
    targetRef.current = progress / 100;

    const animate = () => {
      const current = currentRef.current;
      const target = targetRef.current;

      // ✅ smooth follow (critically damped feel)
      const diff = target - current;

      // if almost equal, snap
      if (Math.abs(diff) < 0.0005) {
        currentRef.current = target;
      } else {
        // ✅ smooth, constant movement (no pauses)
        currentRef.current = current + diff * 0.12;
      }

      // ✅ GPU transform
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${currentRef.current})`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [progress]);

  // ✅ Keep overlay mounted until exit animation is done
  useEffect(() => {
    if (state?.isComplete) {
      const timer = setTimeout(() => setIsVisible(false), 650);
      return () => clearTimeout(timer);
    }
  }, [state?.isComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f8f9fc] transition-all duration-500 ease-in-out
        ${
          state?.isComplete
            ? "translate-y-[-100%] opacity-0"
            : "translate-y-0 opacity-100"
        }
      `}
    >
      {/* Background Ambient Glows (Light Mode Adjusted) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-cyan-400/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[320px] h-[320px] bg-[#0b5c92]/15 blur-[110px] rounded-full pointer-events-none" />

      {/* Grid Background Effect (Darker dots for light bg) */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Logo */}
      <div className="relative mb-10">
        <img
          src={logo}
          alt="Capyngen"
          className="w-68 h-78 sm:w-74 sm:h-64 object-contain drop-shadow-[0_12px_32px_rgba(11,92,146,0.15)] animate-[popIn_0.8s_cubic-bezier(0.22,1,0.36,1)]"
        />

        {/* scan line (Brand color aligned) */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0b5c92] to-transparent blur-sm opacity-60 animate-[scan_2.1s_ease-in-out_infinite]" />
      </div>

      {/* Progress */}
      <div className="flex flex-col items-center w-full max-w-sm px-6 relative z-10">
        <div className="flex justify-between w-full mb-3 text-[10px] tracking-[0.35em] font-bold text-slate-500 uppercase">
          <span className="opacity-90">{syncedMessage}</span>

          {/* ✅ OPTIONAL number: uncomment if needed */}
          {/* <span className="tabular-nums text-slate-600">{Math.floor(progress)}%</span> */}
        </div>

        {/* ✅ GPU smooth progress bar (Light Mode Track & Brand Fill) */}
        <div className="relative h-[4px] w-full bg-slate-200 overflow-hidden rounded-full shadow-inner">
          <div
            ref={barRef}
            className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-gradient-to-r from-[#0b5c92] via-sky-500 to-cyan-400 shadow-[0_0_12px_rgba(11,92,146,0.4)]"
            style={{
              transform: "scaleX(0)", // will be animated continuously
              willChange: "transform",
            }}
          />

          {/* shine sweep */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="h-full w-[40%] bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shine_1.6s_ease-in-out_infinite]" />
          </div>
        </div>

        <p className="mt-8 text-[9px] tracking-[0.5em] text-slate-400 uppercase font-semibold animate-pulse">
          Secure Quantum Handshake
        </p>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(256px); opacity: 0; }
        }

        @keyframes popIn {
          0% { transform: scale(0.85); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes shine {
          0% { transform: translateX(-120%); opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateX(260%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;