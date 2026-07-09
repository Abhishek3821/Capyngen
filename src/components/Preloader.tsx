export interface PreloaderState {
  progress: number;
  message: string;
  isComplete: boolean;
}

const Preloader = ({ state }: { state: PreloaderState }) => {
  return (
    <div
      className={`preloader${state.isComplete ? " preloader--done" : ""}`}
      role="status"
      aria-live="polite"
    >
      <div className="preloader__inner">
        <div className="preloader__logo">Capyngen</div>
        <div className="preloader__bar">
          <div
            className="preloader__bar-fill"
            style={{ width: `${state.progress}%` }}
          />
        </div>
        <div className="preloader__meta">
          <span>{state.message}</span>
          <span>{Math.round(state.progress)}%</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
