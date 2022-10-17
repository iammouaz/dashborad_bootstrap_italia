import AvatarGroup from "Components/Avatars/AvatarGroup";
import DataCard from "Components/Cards/DataCard";
import ExternalLinks from "Components/Lists/ExternalLinks";
import ProgressBar from "Components/Progress/ProgressBar";
import ProgressDonuts from "Components/Progress/ProgressDonuts";
import Tab from "Components/Tabs/Tab";
import { Link } from "react-router-dom";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <>
      <div className="row p-5">
        <div className="row">
          <div className="col-xl-5 col-12">
            <div className="row">
              <div className="col-lg-5 col-12">
                <DataCard>
                  <>
                    <div className="top-icon">
                      <h2 className="card-title bold">69</h2>
                      <h3 className="card-text opacity-75">Active Projects</h3>
                    </div>

                    <p className="card-text">
                      <ProgressBar value="35%" />
                    </p>
                    <Link className="read-more" to="#">
                      <span className="text">43 Pending</span>
                      <svg className="icon">
                        <use href="../assets/sprites.svg#it-arrow-right"></use>
                      </svg>
                    </Link>
                  </>
                </DataCard>
              </div>
              <div className="col-lg-7 col-12">
                <DataCard>
                  <>
                    <div className="top-icon">
                      <h2 className="card-title bold">
                        <span className="h6">$</span> 69,700{"  "}
                        <div className="chip chip-success chip-simple">
                          <span className="chip-label">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.5"
                                x="13"
                                y="6"
                                width="13"
                                height="2"
                                rx="1"
                                transform="rotate(90 13 6)"
                                fill="currentColor"
                              ></rect>
                              <path
                                d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            2.2%
                          </span>
                        </div>
                      </h2>

                      <h3 className="card-text opacity-75">
                        Projects Earnings in April
                      </h3>
                    </div>

                    <p className="card-text">
                      <ProgressDonuts value="0.75" />
                    </p>
                  </>
                </DataCard>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 col-12">
                <DataCard>
                  <>
                    <div className="top-icon">
                      <h2 className="card-title bold">357</h2>
                      <h3 className="card-text opacity-75">Professionals</h3>
                    </div>

                    <p className="card-text">
                      <h5 className="pb-3">Today’s Heroes</h5>
                      <AvatarGroup />
                    </p>
                  </>
                </DataCard>
              </div>
              <div className="col-lg-7 col-12">
                <DataCard>
                  <>
                    <div className="top-icon">
                      <h4 className="card-title">External Links</h4>
                    </div>
                    <p className="card-text">
                      <ExternalLinks />
                    </p>
                  </>
                </DataCard>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-7">
            <DataCard>
              <>
                <h5 className="card-title bold">Authors Achievements </h5>
                <h3 className="card-text opacity-75">Avg. 69.34% Conv. Rate</h3>
                <p className="card-text">
                  <Tab />
                </p>
              </>
            </DataCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
