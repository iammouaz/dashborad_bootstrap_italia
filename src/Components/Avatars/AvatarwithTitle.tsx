import { IconType } from "react-icons";

interface AvatarwithTitleProps {
  image?: string;
  title: string;
  name: string;
  Icon?: IconType;
}

const AvatarwithTitle: React.FunctionComponent<AvatarwithTitleProps> = ({
  image,
  name,
  title,
  Icon,
}) => {
  return (
    <>
      <div className="row">
        <div className="col-4">
          {image && (
            <div className="avatar size-lg">
              <img src={image} alt="" aria-hidden="true" />
            </div>
          )}
          {Icon && <Icon fontSize="3.2rem" color="green" />}
        </div>
        <div className="col-8">
          <span>
            <span className="card-text opacity-75">{title}</span>
            <h6 className="strong">{name}</h6>
          </span>
        </div>
      </div>
    </>
  );
};

export default AvatarwithTitle;
