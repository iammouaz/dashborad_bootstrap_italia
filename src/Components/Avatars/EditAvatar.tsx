import { MdModeEditOutline } from "react-icons/md";
interface EditAvatarProps {}

const EditAvatar: React.FunctionComponent<EditAvatarProps> = () => {
  return (
    <div className="position-relative avatar-box">
      <MdModeEditOutline className="edit-profile" />
      <div className="avatar size-xxl ">
        <img
          src="https://randomuser.me/api/portraits/men/43.jpg"
          alt="Giovanna Ferrero"
        />
      </div>
    </div>
  );
};

export default EditAvatar;
