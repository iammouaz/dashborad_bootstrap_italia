interface TableAvatarsProps {
  image: string;
  name: string;
  location: string;
}

const TableAvatars: React.FunctionComponent<TableAvatarsProps> = ({
  image,
  name,
  location,
}) => {
  return (
    <div className="d-flex gap-3 align-items-center">
      <div className="avatar size-md">
        <img src={image} alt="" aria-hidden="true" />
      </div>
      <div className="avatar-profile">
        <span className="text-xl">{name}</span>
        <span className="opacity-75">{location}</span>
      </div>
    </div>
  );
};

export default TableAvatars;
