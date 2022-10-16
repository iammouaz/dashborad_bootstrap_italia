/* eslint-disable jsx-a11y/anchor-is-valid */
interface AvatarGroupProps {}

const AvatarGroup: React.FunctionComponent<AvatarGroupProps> = () => {
  return (
    <ul className="avatar-group-stacked">
      <li>
        <a className="avatar size-sm" href="#">
          <img
            src="https://randomuser.me/api/portraits/women/12.jpg"
            alt="Arianna Rossi"
          />
        </a>
      </li>
      <li>
        <a className="avatar size-sm" href="#">
          <img
            src="https://randomuser.me/api/portraits/men/13.jpg"
            alt="Giulio Neri"
          />
        </a>
      </li>
      <li>
        <a className="avatar avatar-primary size-sm" href="#">
          <p aria-hidden="true">A</p>
          <span className="visually-hidden">Andrea Gallo</span>
        </a>
      </li>
      <li>
        <a className="avatar avatar-secondary size-sm" href="#">
          <p aria-hidden="true">S</p>
          <span className="visually-hidden">Sara Ghione</span>
        </a>
      </li>
      <li>
        <a className="avatar avatar-green size-sm" href="#">
          <p aria-hidden="true">T</p>
          <span className="visually-hidden">Tommaso Sordi</span>
        </a>
      </li>
      <li>
        <a className="avatar avatar-orange size-sm" href="#">
          <p aria-hidden="true">B</p>
          <span className="visually-hidden">Barbara Tosi</span>
        </a>
      </li>
      <li>
        <a className="avatar avatar-red size-sm" href="#">
          <p aria-hidden="true">R</p>
          <span className="visually-hidden">Roberto Milano</span>
        </a>
      </li>
      <li>
        <a className="avatar size-sm" href="#">
          <svg className="icon icon-secondary">
            <use href="/bootstrap-italia/dist/svg/sprites.svg#it-search"></use>
          </svg>
          <span className="visually-hidden">Cerca</span>
        </a>
      </li>
      <li>
        <div className="avatar avatar-dropdown size-sm">
          <div className="dropdown">
            <a
              className="btn btn-dropdown dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="visually-hidden">Visualizza altri 4 utenti</span>
              <span aria-hidden="true">+4</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <div className="link-list-wrapper">
                <ul className="link-list">
                  <li>
                    <a className="dropdown-item list-item" href="#">
                      <div className="avatar size-sm">
                        <img
                          src="https://randomuser.me/api/portraits/men/46.jpg"
                          alt="Mario Rossi"
                        />
                      </div>
                      <span>Mario Rossi</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item list-item" href="#">
                      <div className="avatar avatar-green size-sm complementary-3-bg">
                        <p aria-hidden="true">A</p>
                      </div>
                      <span>Arianna Gallo</span>
                    </a>
                  </li>
                  <li>
                    <div className="list-item">
                      <div className="avatar avatar-primary size-sm complementary-3-bg">
                        <p aria-hidden="true">S</p>
                      </div>
                      <span>Sara Ghione</span>
                    </div>
                  </li>
                  <li>
                    <div className="list-item">
                      <div className="avatar size-sm">
                        <svg className="icon icon-secondary">
                          <use href="/bootstrap-italia/dist/svg/sprites.svg#it-user"></use>
                        </svg>
                      </div>
                      <span>Antonio Esposito</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default AvatarGroup;
