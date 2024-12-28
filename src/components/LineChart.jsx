import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const color = ["#477664", "#6AA84F"];
  const titleColor = "#5F8878";
  const [chartHeight, setChartHeight] = useState(250);

  const [state, setState] = useState({
    series: [
      {
        name: "Green House Gas Emissions Reduced (kg)",
        data: [1103.78, 809.25, 961.83, 1225.98, 460.4],
      },
      {
        name: "Carbon Emissions Reduced (kg)",
        data: [807.16, 789.8, 687.13, 996.27, 327.5],
      },
    ],
    options: {
      chart: {
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 12,
          left: 5,
          blur: 5,
          opacity: 0.5,
        },
      },
      colors: color,
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [4, 4],
        curve: "straight",
        dashArray: [0, 2],
      },
      title: {
        text: "Reduction in CO2 and Greenhouse Gas Emissions Across Weeks",
        align: "center",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          color: titleColor,
        },
      },
      legend: {
        tooltipHoverFormatter: function (val, opts) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        },
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: +6,
        },
      },
      xaxis: {
        categories: [
          ["Week", 1],
          ["Week", 2],
          ["Week", 3],
          ["Week", 4],
          ["Week", 5],
        ],
        labels: {
          show: true,
          style: {
            fontSize: "10px",
            fontWeight: "bold",
          },
        },
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            fontSize: "10px",
            fontWeight: "bold",
          },
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        custom: function({ series, seriesIndex, dataPointIndex, w }) {
          return '<div class="arrow_box">' +
            '<span style="color:' + color[0] + '">●</span> ' + series[0][dataPointIndex].toFixed(2) + '<br>' +
            '<span style="color:' + color[1] + '">●</span> ' + series[1][dataPointIndex].toFixed(2) +
            '</div>';
        },
        x: {
          show: true,
          formatter: function(val) {
            return 'Week ' + val;
          }
        }
      },
      grid: {
        borderColor: "#f1f1f1",
      },
    },
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      let newHeight, fontSize, titleFontSize, titleText;
      if (width < 400) {
        newHeight = 220; 
        fontSize = '8px';
        titleFontSize = '10px';
        titleText = ['CO2 & GHG', 'Emissions Reduced'];
      } else if (width < 768) {
        newHeight = 270; 
        fontSize = '11px';
        titleFontSize = '14px';
        titleText = ['CO2 & Greenhouse Gas', 'Emissions Reduced'];
      } else {
        newHeight = 300;
        fontSize = '12px';
        titleFontSize = '14px';
        titleText = ['Reduction in CO2 and Greenhouse Gas', 'Emissions Across Weeks'];
      }

      setChartHeight(newHeight);

      setState(prevState => ({
        ...prevState,
        options: {
          ...prevState.options,
          title: {
            ...prevState.options.title,
            text: titleText,
            style: {
              ...prevState.options.title.style,
              fontSize: titleFontSize,
            },
          },
          xaxis: {
            ...prevState.options.xaxis,
            labels: {
              ...prevState.options.xaxis.labels,
              style: {
                ...prevState.options.xaxis.labels.style,
                fontSize: fontSize,
              },
            },
          },
          yaxis: {
            ...prevState.options.yaxis,
            labels: {
              ...prevState.options.yaxis.labels,
              style: {
                ...prevState.options.yaxis.labels.style,
                fontSize: fontSize,
              },
            },
          },
        },
      }));
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);



  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={chartHeight}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default LineChart;

