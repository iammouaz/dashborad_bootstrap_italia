import { useLogout } from "Hooks/Queries/User/useLogout";
import { Link } from "react-router-dom";

interface ProfileMenuProps {}

const ProfileMenu: React.FunctionComponent<ProfileMenuProps> = () => {
  const { Logout } = useLogout();
  return (
    <div className="dropdown">
      <button
        className="btn btn-dropdown dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <div className="avatar size-lg">
          <img
            src="https://randomuser.me/api/portraits/men/43.jpg"
            alt="Gioacchino Romani"
          />
          <svg className="icon-expand icon icon-sm icon-light">
            <use href="../assets/sprites.svg#it-burger"></use>
          </svg>
        </div>
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div className="link-list-wrapper">
          <ul className="link-list">
            <li>
              <Link onClick={Logout} className="dropdown-item list-item" to="#">
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
