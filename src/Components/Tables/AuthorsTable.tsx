import TableAvatars from "Components/Avatars/TableAvatars";
import ProfileChat from "Components/Progress/ProfileChat";
import { authors } from "Mocks/Authors";
import { BsArrowRightCircle } from "react-icons/bs";

interface AuthorTableProps {}

const AuthorTable: React.FunctionComponent<AuthorTableProps> = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">AUTHOR</th>
          <th scope="col">CONV.</th>
          <th scope="col">CHART</th>
          <th scope="col">VIEW</th>
        </tr>
      </thead>
      <tbody>
        {authors.map((item: any) => (
          <tr className="">
            <th>
              <TableAvatars
                image={item.details.image}
                location={item.details.location}
                name={item.details.name}
              />
            </th>
            <td>{item.conv}</td>
            <td>
              <ProfileChat />
            </td>
            <td>
              <button className="btn btn-me" type="button">
                <BsArrowRightCircle fontSize="30px" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AuthorTable;
