import AuthorTable from "Components/Tables/AuthorsTable";
import { AiOutlineCloudSync, AiOutlineBank } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";

interface TabProps {}

const Tab: React.FunctionComponent<TabProps> = () => {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link tab-item active"
            id="tab1-tab"
            data-bs-toggle="tab"
            href="#tab1"
            role="tab"
            aria-controls="tab1"
            aria-selected="true"
          >
            <AiOutlineCloudSync fontSize="35px" />
            SaaS
          </a>
        </li>
        <li className="nav-item ">
          <a
            className="nav-link tab-item"
            id="tab2-tab"
            data-bs-toggle="tab"
            href="#tab2"
            role="tab"
            aria-controls="tab2"
            aria-selected="false"
          >
            <AiOutlineBank fontSize="35px" />
            Crypto
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link tab-item"
            id="tab3-tab"
            data-bs-toggle="tab"
            href="#tab3"
            role="tab"
            aria-controls="tab3"
            aria-selected="false"
          >
            <BsNewspaper fontSize="35px" />
            Social
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link tab-item"
            id="tab4-tab"
            data-bs-toggle="tab"
            href="#tab4"
            role="tab"
            aria-controls="tab4"
            aria-selected="false"
            tabIndex={-1}
          >
            <CiMobile3 fontSize="35px" />
            Mobile
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane p-4 fade show active"
          id="tab1"
          role="tabpanel"
          aria-labelledby="tab1-tab"
        >
         <AuthorTable />
        </div>
        <div
          className="tab-pane p-4 fade"
          id="tab2"
          role="tabpanel"
          aria-labelledby="tab2-tab"
        >
          <AuthorTable />
        </div>
        <div
          className="tab-pane p-4 fade"
          id="tab3"
          role="tabpanel"
          aria-labelledby="tab3-tab"
        >
        <AuthorTable />
        </div>
        <div
          className="tab-pane p-4 fade"
          id="tab4"
          role="tabpanel"
          aria-labelledby="tab3-tab"
        >
         <AuthorTable />
        </div>
      </div>
    </>
  );
};

export default Tab;
