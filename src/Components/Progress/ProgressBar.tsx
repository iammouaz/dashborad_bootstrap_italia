interface ProgressBarProps {
  value: string;
}

const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({ value }) => {
  return (
    <div className="progress-bar-wrapper">
      <div className="progress-bar-label h5">
        <span className="visually-hidden">Progresso </span>
        {value}
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "50%" }}
          aria-valuenow={35}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
