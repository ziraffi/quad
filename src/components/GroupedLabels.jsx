import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const GroupedLabels = () => {
  const color = ["#477664", "#6AA84F"];
  const titleColor = "#5F8878";

  const [chartHeight, setChartHeight] = useState(420);
  const [chartWidth, setChartWidth] = useState('100%');
  const [fontSize, setFontSize] = useState('14px');
  const [titleText, setTitleText] = useState(['Total Volume of Waste', 'by Category Across Weeks']);

  const [state, setState] = useState({
    series: [
      {
        name: 'Large',
        group: 'budget',
        color: '#38761D',
        data: [107.97, 165.38, 57.67, 85.39, 0],
      },
      {
        name: 'Medium',
        group: 'budget',
        color: '#93C47D',
        data: [218.21, 183.84, 270.25, 340.89, 170.94],
      },
      {
        name: 'Small',
        group: 'budget',
        color: '#D9EAD3',
        data: [24.72, 40.84, 43.09, 43.02, 0],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false,
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
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      dataLabels: {
        formatter: (val) => {
          return val + 'T'
        },
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        categories: [
          ["Week", 1],
          ["Week", 2],
          ["Week", 3],
          ["Week", 4],
          ["Week", 5],
        ]
      },
      fill: {
        opacity: 1
      },
      yaxis: {
        labels: {
          formatter: (val) => {
            return val + 'T'
          }
        }
      },
      legend: {
        position: 'bottom',
        clusterGroupedSeriesOrientation: "vertical"
      }
    },
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      let newHeight, newFontSize, newTitleText;

      if (width < 480) {
        newHeight = 300;
        newFontSize = '12px';
        newTitleText = ['Waste Volume', 'by Category'];
      } else if (width < 768) {
        newHeight = 350;
        newFontSize = '13px';
        newTitleText = ['Waste Volume by', 'Category (Weeks)'];
      } else {
        newHeight = 420;
        newFontSize = '14px';
        newTitleText = ['Total Volume of Waste', 'by Category Across Weeks'];
      }

      setChartHeight(newHeight);
      setFontSize(newFontSize);
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
                fontSize: width < 480 ? '8px' : '10px'
              }
            }
          },
          yaxis: {
            ...prevState.options.yaxis,
            labels: {
              ...prevState.options.yaxis.labels,
              style: {
                fontSize: width < 480 ? '8px' : '10px'
              }
            }
          },
          legend: {
            ...prevState.options.legend,
            fontSize: width < 480 ? '10px' : '12px'
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
        <ReactApexChart options={state.options} series={state.series} type="bar" height={chartHeight} width={chartWidth} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default GroupedLabels;

