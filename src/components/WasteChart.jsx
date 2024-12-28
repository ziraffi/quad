import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const WasteChart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      height: 500,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    title: {
      text: "Monthly Waste Reduction",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#444",
      },
    },
  });

  const [series] = useState([
    {
      name: "Waste Reduction",
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6],
    },
  ]);

  useEffect(() => {
    const updateResponsiveOptions = () => {
      const width = window.innerWidth;
      let fontSize, titleFontSize;

      if (width < 400) {
        fontSize = '10px';
        titleFontSize = '12px';
      } else if (width < 768) {
        fontSize = '12px';
        titleFontSize = '14px';
      } else {
        fontSize = '14px';
        titleFontSize = '16px';
      }

      setChartOptions(prevOptions => ({
        ...prevOptions,
        dataLabels: {
          ...prevOptions.dataLabels,
          style: {
            ...prevOptions.dataLabels.style,
            fontSize: fontSize,
          },
        },
        xaxis: {
          ...prevOptions.xaxis,
          labels: {
            ...prevOptions.xaxis.labels,
            style: {
              ...prevOptions.xaxis.labels.style,
              fontSize: fontSize,
            },
          },
        },
        title: {
          ...prevOptions.title,
          style: {
            ...prevOptions.title.style,
            fontSize: titleFontSize,
          },
        },
      }));
    };

    updateResponsiveOptions();
    window.addEventListener('resize', updateResponsiveOptions);
    return () => window.removeEventListener('resize', updateResponsiveOptions);
  }, []);

  return (
    <div id="chart">
      <ReactApexChart options={chartOptions} series={series} type="bar" height={350} />
    </div>
  );
};

export default WasteChart;
