import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const WasteCollection = () => {
  const color = "#356854";
  const titleColor = "#5F8878";
  const chartHeight = 300;
  const [fontSize, setFontSize] = useState("12px");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setFontSize("10px");
      } else if (width < 768) {
        setFontSize("10px");
      } else {
        setFontSize("12px");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [state, setState] = useState({
    series: [
      {
        data: [197.44, 191.74, 311.89, 285.8, 244.61, 272.61, 248.12],
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
        background: "#ffffff",
      },
      title: {
        text: "Total volume of waste collected",
        align: "center",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          color: titleColor,
        },
      },
      colors: [color],
      plotOptions: {
        bar: {
          columnWidth: "65%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["Battery", "Disposal"],
          ["Desktop", "Recycling"],
          ["Laptop", "Recycling"],
          "Miscellaneous",
          ["Mobile Phone", "Recycling"],
          ["Printer", "Recycling"],
          ["TV", "Recycling "],
        ],
        labels: {
          show: true,
          style: {
            fontSize: fontSize,
            fontWeight: "bold",
          },
        },
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            // colors: color,
            fontSize: "10px",
            fontWeight: "bold",
          },
        },
      },
    },
  });

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      options: {
        ...prevState.options,
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
      },
    }));
  }, [fontSize]);
  return (

    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={chartHeight}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default WasteCollection;
