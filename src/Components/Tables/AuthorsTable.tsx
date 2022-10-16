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
          <tr>
            <th scope="row">{item.details.name}</th>
            <td>{item.conv}</td>
            <td>Verdi</td>
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
