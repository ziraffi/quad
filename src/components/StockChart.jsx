import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const StockChart = () => {
  const titleColor = "#5F8878";
  const curveColor = "#4DA710";

  const [chartHeight, setChartHeight] = useState(350);
  const [chartWidth, setChartWidth] = useState("100%");
  const [fontSize, setFontSize] = useState("14px");
  const [titleSize, setTitleSize] = useState("16px");

  const [state, setState] = useState({
    series: [
      {
        name: "Completed Jobs",
        data: [20, 20, 22, 28, 10],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: chartHeight,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: [curveColor],
        width: 2,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.3,
          stops: [0, 90, 100],
          colorStops: [
            {
              offset: 0,
              color: curveColor,
              opacity: 0.5,
            },
            {
              offset: 100,
              color: curveColor,
              opacity: 0.2,
            },
          ],
        },
      },
      title: {
        text: "Weekly Job Completion Trend",
        align: "center",
        style: {
          fontSize: fontSize,
          fontWeight: "bold",
          color: titleColor,
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: fontSize,
            fontWeight: "bold",
          },
        },
      },
      xaxis: {
        type: "category",
        categories: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
        labels: {
          style: {
            fontSize: fontSize,
            fontWeight: "bold",
          },
        },
      },
      legend: {
        horizontalAlign: "left",
      },
    },
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      let newHeight, newFontSize, newTitleSize;

      if (width < 480) {
        newHeight = 200;
        newFontSize = "8px";
        newTitleSize = "10px";
      } else if (width < 768) {
        newHeight = 250;
        newFontSize = "10px";
        newTitleSize = "12px";
      } else {
        newHeight = 350;
        newFontSize = "12px";
        newTitleSize = "14px";
      }

      setFontSize(newFontSize);
      setChartHeight(newHeight);
      setTitleSize(newTitleSize);

      setState((prevState) => ({
        ...prevState,
        options: {
          ...prevState.options,
          chart: {
            ...prevState.options.chart,
            height: newHeight,
          },
          title: {
            ...prevState.options.title,
            style: {
              ...prevState.options.title.style,
              fontSize: newTitleSize,
            },
          },
          xaxis: {
            ...prevState.options.xaxis,
            labels: {
              ...(prevState.options.xaxis.labels || {}),
              style: {
                ...(prevState.options.xaxis.labels?.style || {}),
                fontSize: newFontSize,
              },
            },
          },
          yaxis: {
            ...(prevState.options.yaxis || {}),
            labels: {
              ...(prevState.options.yaxis?.labels || {}),
              style: {
                ...(prevState.options.yaxis?.labels?.style || {}),
                fontSize: newFontSize,
              },
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
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={chartHeight}
          width={chartWidth}
        />
      </div>
    </div>
  );
};

export default StockChart;
