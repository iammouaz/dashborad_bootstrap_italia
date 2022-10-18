import BubbleChart from "Components/Progress/BubbleChart";

interface DurationTabProps {}

const DurationTab: React.FunctionComponent<DurationTabProps> = () => {
  return (
    <>
      <ul className="nav nav-tabs nav-tabs-icon-text" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link "
            id="tab1c-tab"
            data-bs-toggle="tab"
            href="#tab1b"
            role="tab"
            aria-controls="tab1b"
            aria-selected="true"
          >
            Weekly
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="tab2b-tab"
            data-bs-toggle="tab"
            href="#tab2b"
            role="tab"
            aria-controls="tab2b"
            aria-selected="false"
          >
            Monthly
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTab3Content">
        <div
          className="tab-pane p-4 fade show active"
          id="tab1b"
          role="tabpanel"
          aria-labelledby="tab1c-tab"
        >
          <BubbleChart />
        </div>
        <div
          className="tab-pane p-4 fade"
          id="tab2b"
          role="tabpanel"
          aria-labelledby="tab2b-tab"
        >
          <BubbleChart />
        </div>
      </div>
    </>
  );
};

export default DurationTab;
