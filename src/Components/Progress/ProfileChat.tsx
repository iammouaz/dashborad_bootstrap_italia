import Chart from "react-apexcharts";

interface ProfileChatProps {}

const ProfileChat: React.FunctionComponent<ProfileChatProps> = () => {
  let randomArray = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  );

  const data = {
    series: [
      {
        name: "Sales",
        data: randomArray,
      },
    ],
  };

  return (
    <Chart
      height="90px"
      width="200px"
      options={{
        chart: {
          type: "line",
          toolbar: {
            show: false,
          },
        },
        stroke: {
          width: 5,
          curve: "smooth",
          colors: ["#66DA26"],
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
      }}
      series={data.series}
    />
  );
};

export default ProfileChat;
