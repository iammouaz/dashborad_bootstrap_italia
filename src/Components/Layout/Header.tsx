/* eslint-disable jsx-a11y/anchor-is-valid */
interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (

    <div className="it-header-wrapper">
    <div className="it-header-slim-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="it-header-slim-wrapper-content">
              <a className="d-none d-lg-block navbar-brand" href="#">Ente appartenenza</a>
              <div className="nav-mobile">
                <nav aria-label="Navigazione accessoria">
                  <a className="it-opener d-lg-none" data-bs-toggle="collapse" href="#menu1a" role="button"
                    aria-expanded="false" aria-controls="menu4">
                    <span>Ente appartenenza</span>
                    <svg className="icon" aria-hidden="true">
                      <use href="node_modules/bootstrap-italia/dist/svg/sprites.svg#it-expand"></use>
                    </svg>
                  </a>
                  <div className="link-list-wrapper collapse" id="menu1a">
                    <ul className="link-list">
                      <li><a className="dropdown-item list-item" href="#">Link 1</a></li>
                      <li><a className="list-item active" href="#" aria-current="page">Link 2 (Attivo)</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="it-header-slim-right-zone">
                <div className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden">Selezione lingua: lingua selezionata</span>
                    <span>ITA</span>
                    <svg className="icon d-none d-lg-block">
                      <use href="node_modules/bootstrap-italia/dist/svg/sprites.svg#it-expand"></use>
                    </svg>
                  </a>
                  <div className="dropdown-menu">
                    <div className="row">
                      <div className="col-12">
                        <div className="link-list-wrapper">
                          <ul className="link-list">
                            <li><a className="dropdown-item list-item" href="#"><span>ITA <span
                                    className="visually-hidden">selezionata</span></span></a></li>
                            <li><a className="dropdown-item list-item" href="#"><span>ENG</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="it-access-top-wrapper">
                  <a className="btn btn-primary btn-sm" href="#">Accedi</a>
                </div>
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
              <nav className="navbar navbar-expand-lg has-megamenu" aria-label="Navigazione principale">
                <button className="custom-navbar-toggler" type="button" aria-controls="nav1" aria-expanded="false"
                  aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav1">
                  <svg className="icon bg-override">
                    <use href="node_modules/bootstrap-italia/dist/svg/sprites.svg#it-burger"></use>
                  </svg>
                </button>
                <div className="navbar-collapsable" id="nav1">
                  <div className="overlay"></div>
                  <div className="close-div">
                    <button className="btn close-menu" type="button">
                      <span className="visually-hidden">Nascondi la navigazione</span>
                      <svg className="icon">
                        <use href="node_modules/bootstrap-italia/dist/svg/sprites.svg#it-close-big"></use>
                      </svg>
                    </button>
                  </div>
                  <div className="menu-wrapper">
                    <ul className="navbar-nav">
                      <li className="nav-item active"><a className="nav-link active" href="#" aria-current="page"><span>Link 1
                            (attivo)</span></a></li>
                      <li className="nav-item"><a className="nav-link disabled" href="#" aria-disabled="true"><span>Link 2
                            (disabilitato)</span></a></li>
                      <li className="nav-item"><a className="nav-link" href="#"><span>Link 3</span></a></li>
                      <li className="nav-item"><a className="nav-link" href="#"><span>Link 4</span></a></li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false"
                          id="mainNavDropdown1">
                          <span>Menu Dropdown</span>
                          <svg className="icon icon-xs">
                            <use href="node_modules/bootstrap-italia/dist/svg/sprites.svg#it-expand"></use>
                          </svg>
                        </a>
                        <div className="dropdown-menu" role="region" aria-labelledby="mainNavDropdown1">
                          <div className="link-list-wrapper">
                            <div className="link-list-heading">Sezione</div>
                            <ul className="link-list">
                              <li><a className="dropdown-item list-item" href="#"><span>Link lista 1</span></a></li>
                              <li><a className="dropdown-item list-item" href="#"><span>Link lista 2</span></a></li>
                              <li><a className="dropdown-item list-item" href="#"><span>Link lista 3</span></a></li>
                              <li><span className="divider"></span></li>
                              <li><a className="dropdown-item list-item" href="#"><span>Link lista 4</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item dropdown megamenu">
                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false"
                          id="mainNavMegamenu1">
                          <span>Megamenu</span>
                          <svg className="icon icon-xs">
                            <use href="node_modules/bootstrap-italia/dist/svg/sprites.svg#it-expand"></use>
                          </svg>
                        </a>
                        <div className="dropdown-menu" role="region" aria-labelledby="mainNavMegamenu1">
                          <div className="row">
                            <div className="col-12 col-lg-4">
                              <div className="link-list-wrapper">
                                <div className="link-list-heading">Sezione 1</div>
                                <ul className="link-list">
                                  <li><a className="dropdown-item list-item" href="#"><span>Link lista 1</span></a></li>
                                  <li><a className="dropdown-item list-item" href="#"><span>Link lista 2</span></a></li>
                                  <li><a className="dropdown-item list-item" href="#"><span>Link lista 3</span></a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-12 col-lg-4">
                              <div className="link-list-wrapper">
                                <ul className="link-list">
                                  <li>
                                    <div className="link-list-heading">Sezione 2</div>
                                  </li>
                                  <li><a className="dropdown-item list-item" href="#"><span>Link lista 4</span></a></li>
                                  <li><a className="dropdown-item list-item" href="#"><span>Link lista 5</span></a></li>
                                  <li><a className="dropdown-item list-item" href="#"><span>Link lista 6</span></a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-12 col-lg-4">
                              <div className="link-list-wrapper">
                                <ul className="link-list">
                                  <li>
                                    <div className="link-list-heading">Sezione 3</div>
                                  </li>
                                  <li><a className="dropdown-item list-item" href="#"><span>Link lista 7</span></a></li>
                                  <li><a className="dropdown-item list-item" href="#"><span>Link lista 8</span></a></li>
                                  <li><a className="dropdown-item list-item" href="#"><span>Link lista 9</span></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
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
