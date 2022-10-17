import { Link } from "react-router-dom";

interface AvatarTeamProps {}

const AvatarTeam: React.FunctionComponent<AvatarTeamProps> = () => {
  return (
    <ul className="avatar-group-stacked">
      <li>
        <Link className="avatar size-lg" to="#">
          <img
            src="https://randomuser.me/api/portraits/women/11.jpg"
            alt="Arianna Rossi"
          />
        </Link>
      </li>
      <li>
        <Link className="avatar size-lg" to="#">
          <img
            src="https://randomuser.me/api/portraits/men/10.jpg"
            alt="Giulio Neri"
          />
        </Link>
      </li>
      <li>
        <Link className="avatar size-lg" to="#">
          <img
            src="https://randomuser.me/api/portraits/men/14.jpg"
            alt="Giulio Neri"
          />
        </Link>
      </li>
      <li></li>
    </ul>
  );
};

export default AvatarTeam;
