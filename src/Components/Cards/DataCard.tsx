
interface DataCardProps {
  children: JSX.Element;
}

const DataCard: React.FunctionComponent<DataCardProps> = ({ children }) => {
  return (
    <div className="card-wrapper card-space dashborad-card ">
      <div className="card card-bg bg-primary content-card bg-white">
        <div className="card-body bg-primary content-card bg-white">{children}</div>
      </div>
    </div>
  );
};

export default DataCard;
