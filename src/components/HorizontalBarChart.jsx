import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const HorizontalBarChart = () => {
  const color = "#356854";
  const titleColor = "#5F8878";

  const [chartHeight, setChartHeight] = useState(350);
  const [fontSize, setFontSize] = useState('14px');
  const [xAxisFontSize, setXAxisFontSize] = useState('8px');
  const [yAxisFontSize, setYAxisFontSize] = useState('10px');
  const [titleText, setTitleText] = useState(['Energy Conserved by', 'each Service type in Week 4']);

  const [state, setState] = useState({
    series: [
      {
        data: [397.6, 172.01, 520.2, 635.82, 326.36, 1008.59, 167.99],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: chartHeight,
        width: "100%",
        toolbar: {
          show: false,
        },
        background: '#ffffff',
      },
      plotOptions: {
        bar: {
          borderRadiusApplication: "end",
          horizontal: true,
          barHeight: "70%",
          distributed: false,
        },
      },
      title: {
        text: titleText,
        align: "center",
        style: {
          fontSize: fontSize,
          fontWeight: "bold",
          color: titleColor,
        },
      },
      colors: [color],
      dataLabels: {
        enabled: false,
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        type: "category",
        categories: [
          "Battery Disposal",
          "Desktop Recycling",
          "Laptop Recycling",
          "Miscellaneous",
          "Mobile Phone Recycling",
          "Printer Recycling",
          "TV Recycling",
        ],
        labels: {
          show: true,
          style: {
            fontSize: xAxisFontSize,
            fontWeight: "bold",
          },
        },
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            fontSize: yAxisFontSize,
            fontWeight: "bold",
          },
        },
      },
    },
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      let newHeight, newFontSize, newXAxisFontSize, newYAxisFontSize, newTitleText;

      if (width < 480) {
        newHeight = 200;
        newFontSize = '12px';
        newXAxisFontSize = '6px';
        newYAxisFontSize = '8px';
        newTitleText = ['Energy Conserved', 'by Service (Week 4)'];
      } else if (width < 768) {
        newHeight = 250;
        newFontSize = '13px';
        newXAxisFontSize = '7px';
        newYAxisFontSize = '9px';
        newTitleText = ['Energy Conserved by', 'Service Type (Week 4)'];
      } else {
        newHeight = 400;
        newFontSize = '14px';
        newXAxisFontSize = '8px';
        newYAxisFontSize = '10px';
        newTitleText = ['Energy Conserved by', 'each Service type in Week 4'];
      }

      setChartHeight(newHeight);
      setFontSize(newFontSize);
      setXAxisFontSize(newXAxisFontSize);
      setYAxisFontSize(newYAxisFontSize);
      setTitleText(newTitleText);

      setState(prevState => ({
        ...prevState,
        options: {
          ...prevState.options,
          chart: {
            ...prevState.options.chart,
            height: newHeight
          },
          title: {
            ...prevState.options.title,
            text: newTitleText,
            style: {
              ...prevState.options.title.style,
              fontSize: newFontSize
            }
          },

          xaxis: {
            ...prevState.options.xaxis,
            labels: {
              ...prevState.options.xaxis.labels,
              style: {
                ...prevState.options.xaxis.labels.style,
                fontSize: newXAxisFontSize
              }
            }
          },
          yaxis: {
            ...prevState.options.yaxis,
            labels: {
              ...prevState.options.yaxis.labels,
              style: {
                ...prevState.options.yaxis.labels.style,
                fontSize: newYAxisFontSize
              }
            }
          }
        }
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
          type="bar"
          height={chartHeight}
          width="100%"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default HorizontalBarChart;

