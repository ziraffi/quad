import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const HistogramChart = () => {
  const titleColor = "#5F8878";
  const barColor = "#4DA710";
  const chartHeight = 320;
  // Remove the chartWidth constant
  const startBin = 5;
  const binSize = 7;

 const createHistogramData = (data, startBin, binSize) => {
    const bins = {};
    let maxValue = Math.max(...data);
    data.forEach((value) => {
      let binIndex;
      if (value < startBin) {
        binIndex = startBin;
      } else {
        binIndex = startBin + Math.ceil((value - startBin) / binSize) * binSize;
      }
      bins[binIndex] = (bins[binIndex] || 0) + 1;
    });

    const sortedBins = Object.entries(bins)
      .sort((a, b) => parseFloat(a[0]) - parseFloat(b[0]))
      .map(([bin, count]) => ({
        x: parseFloat(bin),
        y: count,
      }));

    // Add an "Above" bin for values exceeding the last regular bin
    const lastRegularBin = sortedBins[sortedBins.length - 1].x;
    if (maxValue > lastRegularBin) {
      sortedBins.push({
        x: lastRegularBin + binSize,
        y: data.filter(v => v > lastRegularBin).length
      });
    }

    return sortedBins;
  };


  const rawData = [
    13.69, 35.2, 6.78, 70.43, 17.48, 23.22, 0.07, 46.45, 7.84, 31.22, 35.93,
    35.94, 1.71, 56.74, 8.22, 30.92, 38.02, 26.05, 31.07, 36.32, 12.48, 11.85,
    24.67, 24.52, 42.26, 20.97, 12.62, 12.53, 25.77, 16.77, 72.71, 14.47, 32.62,
    5.27, 7.63, 11.92, 28.66, 21.25, 34.36, 34.81, 25.51, 19.42, 25.77, 33.78,
    8.29, 7.37, 3.36, 43.43, 20.85, 37.24, 25.65, 38.73, 17.48, 47.23, 23.97,
    20.31, 6.29, 25.49, 30.03, 13.83, 31.67, 40.45, 67.36, 22.17, 41.22, 36.94,
    14.07, 15.32, 6.24, 27.47, 17.03, 16.13, 21.37, 10.58, 13.49, 10.64, 23.42,
    5.62, 4.91, 22.19, 15.27, 18.36, 45.17, 48.82, 67.22, 14.43, 11.99, 7.66,
    2.72, 32.93, 10.49, 10.74, 42.17, 22.11, 7.11, 26.35, 17.62, 18.13, 16.23,
    5.07,
  ];

  const [histogramData, setHistogramData] = useState([]);
  const [chartState, setChartState] = useState({
    series: [],
    options: {
      chart: {
        type: "bar",
        height: chartHeight,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          columnWidth: "97%",
          barHeight: "100%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: [barColor],
      xaxis: {
        type: "category",
        categories: [],
        tickAmount: undefined,
        tickPlacement: 'on',
        title: {
          text: "Disposal Fees",
        },
        labels: {
          rotate: -45,
          rotateAlways: true,
        },
      },
      yaxis: {
        title: {
          text: "Frequency",
        },
        labels: {
          formatter: function (val) {
            return Math.floor(val);
          },
        },
        forceNiceScale: true,
        min: 0,
      },
      title: {
        text: "Distribution of Disposal Fees",
        align: "center",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          color: titleColor,
        },
      },
      tooltip: {
        x: {
          formatter: function (val, opts) {
            const category = opts.w.globals.labels[opts.dataPointIndex];
            return category;
          },
        },
        y: {
          formatter: function (val) {
            return Math.floor(val);
          },
        },
      },
    },
  });

  useEffect(() => {
    const newHistogramData = createHistogramData(rawData, startBin, binSize);
    setHistogramData(newHistogramData);

    const categories = newHistogramData.map(d => d.x);

    setChartState(prevState => ({
      series: [{
        name: "Frequency",
        data: newHistogramData.map(d => d.y),
      }],
      options: {
        ...prevState.options,
        chart: {
          ...prevState.options.chart,
          width: '100%',
          height: 'auto',
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
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
        }],
        xaxis: {
          ...prevState.options.xaxis,
          categories: categories,
          tickAmount: categories.length,
          tickPlacement: 'on',
          labels: {
            ...prevState.options.xaxis.labels,
            rotate: -45,
            rotateAlways: true,
            formatter: function(value) {
              return value;
            },
            style: {
              fontSize: '10px',
              fontWeight: 400,
            },
            offsetX: -10,
            offsetY: 0,
            align: 'left',
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        plotOptions: {
          ...prevState.options.plotOptions,
          bar: {
            ...prevState.options.plotOptions.bar,
            columnWidth: '95%',
            distributed: true,
          },
        },
        legend: {
          show: false,
        },
        grid: {
          xaxis: {
            lines: {
              show: false,
            },
          },
        },
      },
    }));
  }, []);





  // console.log("Final Chart State:", chartState);
  return (
    <div style={{ width: '100%' }}>
      <div id="chart">
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="bar"
          height={chartHeight}
          width="100%"
        />
      </div>
    </div>

  );
};

export default HistogramChart;

