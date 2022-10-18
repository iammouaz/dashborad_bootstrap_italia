import Chart from "react-apexcharts";

interface BubbleChartProps {}

const BubbleChart: React.FunctionComponent<BubbleChartProps> = () => {
  const data = {
    series: [
      {
        name: "Social Campaigns",
        data: [
          [
            new Date().getTime(),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
        ],
      },
      {
        name: "Email Newsletter",
        data: [
          [
            new Date().getTime() + 2,
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
        ],
      },
      {
        name: "TV Campaign",
        data: [
          [
            new Date().getTime(),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
        ],
      },
      {
        name: "Google Ads",
        data: [
          [
            new Date().getTime(),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
        ],
      },
    ],
  };

  return (
    <Chart
      options={{
        chart: {
          height: 350,
          type: "bubble",
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          opacity: 0.8,
        },
        title: {
          text: "Simple Bubble Chart",
        },
        xaxis: {
          tickAmount: 7,
          type: "datetime",
          labels: {
            datetimeFormatter: {
              year: "yyyy",
              month: "MM/yyyy",
              day: "MM/yyyy",
              hour: "HH:mm",
            },
          },
        },
        yaxis: {
          max: 100,
        },
      }}
      series={data.series}
      type="bubble"
      height={350}
    />
  );
};

export default BubbleChart;
