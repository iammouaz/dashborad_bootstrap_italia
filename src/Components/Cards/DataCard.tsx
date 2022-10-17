interface DataCardProps {
  children: JSX.Element;
  isScrolled?: boolean;
}

const DataCard: React.FunctionComponent<DataCardProps> = ({
  children,
  isScrolled,
}) => {
  return (
    <div className="card-wrapper card-space dashborad-card">
      <div
        className={
          isScrolled
            ? "card card-bg bg-primary content-card bg-white table-tabs"
            : "card card-bg bg-primary content-card bg-white"
        }
      >
        <div className="card-body bg-primary content-card bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DataCard;
