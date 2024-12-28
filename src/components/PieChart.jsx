import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const color = "#ffffff";
  const titleColor = "#5F8878";
  const pieColors = [
    "#38761D",
    "#709C5B",
    "#4DA710",
    "#B2E8A0",
    "#93C47D",
    "#6AA84F",
    "#274E13",
  ];

  const [chartHeight, setChartHeight] = useState(280);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "pie",
      width: "100%",
      height: "auto",
    },
    title: {
      text: "Percentage of Toxic Substances Safely Disposed",
      align: "center",
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        color: titleColor,
      },
    },
    labels: [
      ["Battery", "Disposal"],
      ["Desktop", "Recycling"],
      ["Laptop", "Recycling"],
      "Miscellaneous",
      ["Mobile", "Phone", "Recycling"],
      ["Printer", "Recycling"],
      ["TV", "Recycling "],
    ],
    legend: {
      fontSize: "10px",
      fontWeight: 550,
      position: "right",
      offsetY: 20,
      markers: {
        width: 12,
        height: 12,
        radius: 12,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 0
      },
    },
    fill: {
      colors: pieColors,
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "10px",
        fontWeight: "bold",
        color: color,
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -10,
        },
        offsetY: 30,
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  });

  const [series] = useState([31.31, 37.05, 35.67, 42.58, 41.48, 39.25, 28.13]);

  useEffect(() => {
    const updateResponsiveOptions = () => {
      const width = window.innerWidth;
      let fontSize, titleFontSize, legendPosition, chartHeight, dataLabelsEnabled, offsetY, legendFontWeight;

      if (width < 360) {
        fontSize = '7px';
        titleFontSize = '10px';
        legendPosition = 'bottom';
        chartHeight = 200;
        dataLabelsEnabled = false;
        offsetY = 0;
        legendFontWeight = 400;
      } else if (width < 480) {
        fontSize = '8px';
        titleFontSize = '11px';
        legendPosition = 'bottom';
        chartHeight = 250;
        dataLabelsEnabled = true;
        offsetY = 0;
        legendFontWeight = 450;
      } else if (width < 768) {
        fontSize = '9px';
        titleFontSize = '12px';
        legendPosition = 'bottom';
        chartHeight = 300;
        dataLabelsEnabled = true;
        offsetY = 10;
        legendFontWeight = 500;
      } else if (width < 1024) {
        fontSize = '8px';
        titleFontSize = '10px';
        legendPosition = 'bottom';
        chartHeight = 320;
        dataLabelsEnabled = true;
        offsetY = 0;
        legendFontWeight = 550;
      } else if (width < 1220) {
        fontSize = '10px';
        titleFontSize = '12px';
        legendPosition = 'bottom';
        chartHeight = 320;
        dataLabelsEnabled = true;
        offsetY = 0;
        legendFontWeight = 550;
      } else {
        fontSize = '12px';
        titleFontSize = '14px';
        legendPosition = 'right';
        chartHeight = 400;
        dataLabelsEnabled = true;
        offsetY = 30;
        legendFontWeight = 600;
      }

      setChartHeight(chartHeight);
      setChartOptions(prevOptions => ({
        ...prevOptions,
        legend: {
          ...prevOptions.legend,
          fontSize: fontSize,
          fontWeight: legendFontWeight,
          position: legendPosition,
          offsetY: legendPosition === 'bottom' ? 0 : 20,
          itemMargin: {
            horizontal: 5,
            vertical: legendPosition === 'bottom' ? 0 : 3
          },
        },
        title: {
          ...prevOptions.title,
          style: {
            ...prevOptions.title.style,
            fontSize: titleFontSize
          }
        },
        dataLabels: {
          ...prevOptions.dataLabels,
          enabled: dataLabelsEnabled,
          style: {
            ...prevOptions.dataLabels.style,
            fontSize: fontSize
          }
        },
        plotOptions: {
          ...prevOptions.plotOptions,
          pie: {
            ...prevOptions.plotOptions.pie,
            offsetY: offsetY,
            dataLabels: {
              offset: width < 768 ? -5 : -10,
            }
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: '100%'
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }));
    };

    updateResponsiveOptions(); 
    window.addEventListener('resize', updateResponsiveOptions);
    return () => window.removeEventListener('resize', updateResponsiveOptions);
  }, []);


  return (
    <div style={{ width: "100%" }}>
      <div id="chart">
        <ReactApexChart
          options={chartOptions}
          series={series}
          height={chartHeight}
          type="pie"
          width="100%"
        />
      </div>
    </div>
  );
};

export default PieChart;

