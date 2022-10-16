import Chart from "react-apexcharts";

interface ProgressDonutsProps {
  value: string;
}

const ProgressDonuts: React.FunctionComponent<ProgressDonutsProps> = ({
  value,
}) => {
  const data = {
    series: [9.66, 6.82, 45.257],
  };

  return (
    <>
      <Chart
        width="370px"
        options={{
          chart: {
            type: "donut",
          },
          fill: {
            type: "gradient",
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 100,
                },
                legend: {
                  position: "right",
                  horizontalAlign: "right",
                },
              },
            },
          ],
          legend: {
            formatter: function (val, opts) {
              return val + " - $ " + opts.w.globals.series[opts.seriesIndex];
            },
            fontSize: "16px",
            fontWeight: 500,
          },
          labels: ["Leaf CRM", "Mivy App", "Others"],
        }}
        series={data.series}
        type="donut"
      />
    </>
  );
};

export default ProgressDonuts;
