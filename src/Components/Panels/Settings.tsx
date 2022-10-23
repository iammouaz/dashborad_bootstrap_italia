import CountCard from "Components/Cards/CountCard";
import DataCard from "Components/Cards/DataCard";
import UpdateSettingsForm from "Components/Form/UpdateSettingsForm";
import ProgressBar from "Components/Progress/ProgressBar";
import { BsPatchCheckFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

interface SettingsProps {}

const Settings: React.FunctionComponent<SettingsProps> = () => {
  return (
    <>
      <div className="row p-3">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <DataCard>
                <>
                  <div className="p-2 p-lg-5 row">
                    <div className="col-lg-10 col-12 row gap-4">
                      <div className="avatar size-xxl col-12 col-lg-3">
                        <img
                          src="https://randomuser.me/api/portraits/men/43.jpg"
                          alt="Giovanna Ferrero"
                        />
                      </div>
                      <div className="col-lg-9 col-12">
                        <div className="d-flex gap-3">
                          <span className="h4">Max Smith</span>
                          <BsPatchCheckFill className="h3" color="green" />
                        </div>
                        <div className="d-flex gap-4 pt-3">
                          <Link to="" className="opacity-50 h5">
                            <CgProfile /> Developer
                          </Link>
                          <Link to="" className="opacity-50 h5">
                            <CiLocationOn /> SF, Bay Area
                          </Link>
                          <Link to="" className="opacity-50 h5">
                            <FiMail /> max@kt.com
                          </Link>
                        </div>
                        <div className="row gap-3 pt-2">
                          <div className="col-xl-2 col-md-7 col-sm-5 col-5">
                            <CountCard up value={5400} type="Earnings" />
                          </div>
                          <div className="col-xl-2 col-md-7 col-sm-5 col-5">
                            <CountCard up={false} value={75} type="Projects" />
                          </div>
                          <div className="col-xl-2 col-md-7 col-sm-5 col-5">
                            <CountCard up value={60} type="Success Rate" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-12 pt-2">
                      <div className="col-12">
                        <button type="button" className="btn mx-1 btn-primary">
                          Follow
                        </button>
                        <button
                          type="button"
                          className="btn mx-1 btn-secondary"
                        >
                          Hire Me
                        </button>
                      </div>
                      <div className="col-12 pt-5">
                        <span className="h6">Profile Compleation</span>
                        <ProgressBar value="50%" />
                      </div>
                    </div>
                  </div>
                </>
              </DataCard>
              <DataCard>
                <>
                  <UpdateSettingsForm />
                </>
              </DataCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
