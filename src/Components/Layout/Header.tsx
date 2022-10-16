import ProfileMenu from "Components/Menus/ProfileMenu";
import { useLogout } from "Hooks/Queries/User/useLogout";

/* eslint-disable jsx-a11y/anchor-is-valid */
interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const { Logout } = useLogout();

  return (
    <div className="it-header-wrapper">
      <div className="it-header-slim-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="it-header-slim-wrapper-content">
                <a className="navbar-brand" href="#">
                Pannello
                </a>

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
                    aria-controls="nav1"
                    aria-expanded="false"
                    aria-label="Mostra/Nascondi la navigazione"
                    data-bs-toggle="navbarcollapsible"
                    data-bs-target="#nav1"
                  >
                    <svg className="icon bg-override">
                      <use href="node_modules/bootstrap-italia/dist/svg/sprites.svg#it-burger"></use>
                    </svg>
                  </button>
                  <div className="navbar-collapsable" id="nav1">
                    <div className="menu-wrapper">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link active" href="#" aria-disabled="true">
                            <span>Home</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <span>Data</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <span>Settings</span>
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
