import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = () => {
  const [chartWidth, setChartWidth] = useState("100%");
  const [chartHeight, setChartHeight] = useState("100%");
  const pieColors = ["#B2E8A0", "#709C5B", "#4DA710"];
  const titleColor = "#5F8878";
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "donut",
      height: "100%",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        donut: {
          size: "55%",
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return Math.floor(val) + "%";
      },
      style: {
        fontSize: "12px",
        fontWeight: 550,
        colors: ["#0f0a0f"],
      },
    },
    labels: ["Small", "Large", "Medium"],
    fill: {
      type: "gradient",
      colors: pieColors,
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      floating: false,
      fontSize: "12px",
      fontWeight: 550,
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
      },
      offsetY: 0,
      itemMargin: {
        horizontal: 5,
        vertical: 2,
      },
    },
    title: {
      text: ["Percentage of Waste", "Category Distribution"],
      align: "center",
      margin: 10,
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        color: titleColor,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
            floating: false,
            offsetY: 0,
          },
          plotOptions: {
            pie: {
              offsetY: 0,
            },
          },
        },
      },
      {
        breakpoint: 1024,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "right",
            offsetY: 20,
            floating: true,
          },
          plotOptions: {
            pie: {
              offsetY: +50,
            },
          },
        },
      },
      {
        breakpoint: 1280,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "right",
            offsetY: +20,
            floating: true,
          },
          plotOptions: {
            pie: {
              offsetY: +50,
            },
          },
        },
      },
      {
        breakpoint: 1515,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "right",
            offsetY: +25,
            floating: true,
          },
          plotOptions: {
            pie: {
              offsetY: +60,
            },
          },
        },
      },
    ],
  });

  const [series, setSeries] = useState([15, 64, 21]);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      let fontSize, donutSize, chartHeight;

      if (width < 480) {
        fontSize = "8px";
        donutSize = "70%";
        chartHeight = 300;
      } else if (width < 768) {
        fontSize = "10px";
        donutSize = "65%";
        chartHeight = 380;
      } else if (width < 1024) {
        fontSize = "12px";
        donutSize = "60%";
        chartHeight = 450;
      } else if (width < 1280) {
        fontSize = "12px";
        donutSize = "70%";
        chartHeight = 500;
      }else if (width < 1515) {
        fontSize = "12px";
        donutSize = "60%";
        chartHeight = 550;
      }else {
        fontSize = "12px";
        donutSize = "55%";
        chartHeight = "90%";
      }

      setChartWidth("100%");
      setChartHeight(chartHeight);

      setChartOptions((prevOptions) => ({
        ...prevOptions,
        chart: {
          ...prevOptions.chart,
          height: chartHeight,
        },
        legend: {
          ...prevOptions.legend,
          fontSize: fontSize,
        },
        plotOptions: {
          ...prevOptions.plotOptions,
          pie: {
            ...prevOptions.plotOptions.pie,
            donut: {
              ...prevOptions.plotOptions.pie.donut,
              size: donutSize,
            },
          },
        },
      }));
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div
      id="chart"
      style={{ width: "100%", height: "400px", maxWidth: "100%" }}
    >
      <ReactApexChart
        options={chartOptions}
        series={series}
        type="donut"
        width={chartWidth}
        height={chartHeight}
      />
    </div>
  );
};

export default DonutChart;
