import ProfileMenu from "Components/Menus/ProfileMenu";
import { useLogout } from "Hooks/Queries/User/useLogout";
import { useRecoilState } from "recoil";
import { currentTab } from "Recoil/Atoms";

/* eslint-disable jsx-a11y/anchor-is-valid */
interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const { Logout } = useLogout();
  const [current, setcurrentTab] = useRecoilState(currentTab);

  return (
    <div className="it-header-wrapper">
      <div className="it-header-slim-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="it-header-slim-wrapper-content">
                <a className="navbar-brand" href="#"></a>

                <div className="it-header-slim-right-zone">
                  <button
                    onClick={Logout}
                    type="button"
                    className="btn text-white"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="it-nav-wrapper">
        <div className="it-header-navbar-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav
                  className="navbar navbar-expand-lg has-megamenu"
                  aria-label="Navigazione principale"
                >
                  <button
                    className="custom-navbar-toggler"
                    type="button"
                    style={{ position: "absolute", bottom: "50%" }}
                    aria-controls="nav1"
                    aria-expanded="false"
                    aria-label="Mostra/Nascondi la navigazione"
                    data-bs-toggle="navbarcollapsible"
                    data-bs-target="#nav1"
                  >
                    <svg className="icon bg-override">
                      <use href="../assets/sprites.svg#it-burger"></use>
                    </svg>
                  </button>
                  <div className="navbar-collapsable" id="nav1">
                  <div className="overlay" style={{display: "none"}}></div>

                    <div className="close-div">
                      <button className="btn close-menu" type="button">
                        <span className="visually-hidden">
                          Nascondi la navigazione
                        </span>
                        <svg className="icon">
                          <use href="../assets/sprites.svg#it-close-big"></use>
                        </svg>
                      </button>
                    </div>
                    <div className="menu-wrapper">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a
                            onClick={() => {
                              setcurrentTab("home");
                            }}
                            className={
                              current === "home"
                                ? "nav-link active"
                                : "nav-link "
                            }
                            href="#"
                            aria-disabled="true"
                          >
                            <span className="h5">Home</span>
                          </a>
                        </li>
                        {/* <li className="nav-item">
                          <a
                            onClick={() => {
                              setcurrentTab("data");
                            }}
                            className={
                              current === "data"
                                ? "nav-link active"
                                : "nav-link "
                            }
                            href="#"
                          >
                            <span>Data</span>
                          </a>
                        </li> */}
                        <li className="nav-item">
                          <a
                            onClick={() => {
                              setcurrentTab("settings");
                            }}
                            className={
                              current === "settings"
                                ? "nav-link active"
                                : "nav-link "
                            }
                            href="#"
                          >
                            <span className="h5">Settings</span>
                          </a>
                        </li>
                      </ul>
                      <ProfileMenu />
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
