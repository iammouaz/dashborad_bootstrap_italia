import Data from "Components/Panels/Data";
import Home from "Components/Panels/Home";
import Settings from "Components/Panels/Settings";
import { useRecoilState } from "recoil";
import { currentTab } from "Recoil/Atoms";

interface DashboradProps {}

const Dashborad: React.FunctionComponent<DashboradProps> = () => {
  const [current] = useRecoilState(currentTab);
  return (
    <>
      {(() => {
        switch (current) {
          case "home":
            return <Home />;
          case "settings":
            return <Settings />;
          case "data":
            return <Data />;
          default:
            return <Home />;
        }
      })()}
    </>
  );
};

export default Dashborad;
