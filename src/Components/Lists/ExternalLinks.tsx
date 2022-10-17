import { Link } from "react-router-dom";

interface ExternalLinksProps {}

const ExternalLinks: React.FunctionComponent<ExternalLinksProps> = () => {
  return (
    <div className="link-list-wrapper pt-3">
      <ul className="link-list">
        <li>
          <Link className="list-item icon-right"to="#">
            <span className="list-item-title-icon-wrapper">
              <h6 className="list-item-title">Link lista 1</h6>
              <svg className="icon icon-primary">
                <use href="../assets/sprites.svg#it-link"></use>
              </svg>
            </span>
          </Link>
        </li>
        <li>
          <Link className="list-item icon-right"to="#">
            <span className="list-item-title-icon-wrapper">
              <h6 className="list-item-title">Link lista 2</h6>
              <svg className="icon icon-primary">
              <use href="../assets/sprites.svg#it-link"></use>
              </svg>
            </span>
          </Link>
        </li>
        <li>
          <Link className="list-item icon-right" to="#">
            <span className="list-item-title-icon-wrapper">
              <h6 className="list-item-title">Link lista 3</h6>
              <svg className="icon icon-primary">
              <use href="../assets/sprites.svg#it-link"></use>
              </svg>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ExternalLinks;
