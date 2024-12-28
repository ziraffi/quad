import { MdCurrencyExchange, MdWorkspacePremium } from "react-icons/md";

import DonutChart from "../components/DonutChart";
import GroupedLabels from "../components/GroupedLabels";
import HistogramChart from "../components/HistogramChart";
import HorizontalBarChart from "../components/HorizontalBarChart";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import StockChart from "../components/StockChart";
import WasteCollection from "../components/WasteCollection";

const FinalQuadTest = () => {
  return (
    <>
      {/* Section Start */}
      <div className="px-2 md:px-7 py-5 gap-4 flex flex-col">
        {/* Info  */}
        <div className="grid grid-cols-2 gap-4 duration-200 transition-all ease-in-out">
          <div className="flex flex-col justify-between p-4 bg-amber-100 rounded-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl sm:text-2xl">$ 27.06</h2>
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-violet-500">
                <MdCurrencyExchange className="text-xl fill-purple-100" />
              </div>
            </div>
            <span className="text-sm font-medium">Average Disposal Fee</span>
          </div>
          <div className="flex flex-col justify-between p-4 bg-amber-100 rounded-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl sm:text-2xl">100</h2>
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-green-500">
                <MdWorkspacePremium className="text-xl fill-purple-100" />
              </div>
            </div>
            <span className="text-sm font-medium">
              Number of Jobs Fulfilled
            </span>
          </div>
        </div>

        {/* Charts Section */}
        <div className="flex flex-col gap-4 duration-200 transition-all ease-in-out">
          {/* First row of charts */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full md:w-8/12 p-4 rounded-md bg-white">
              <StockChart />
            </div>
            <div className="flex flex-col w-full md:w-4/12 p-4 rounded-md bg-white">
              <DonutChart />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 duration-200 transition-all ease-in-out">
            <div className="flex flex-col w-full md:w-6/12 p-4 rounded-md bg-white">
              <GroupedLabels />
            </div>
            <div className="flex flex-col w-full md:w-6/12 p-4 rounded-md bg-white">
              <HorizontalBarChart />
            </div>
          </div>

          {/* Other Charts */}
          <div className="flex flex-col sm:flex-row md:justify-between gap-2 duration-200 transition-all ease-in-out">
            <div className="sm:w-7/12 w-full lg:px-1">
              <div className="w-full p-4 rounded-md bg-white">
                <HistogramChart />
              </div>
            </div>
            <div className="sm:w-5/12 w-full lg:px-1">
              <div className="w-full h-full p-4 rounded-md bg-white">
                <PieChart />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row md:justify-between gap-2 duration-200 transition-all ease-in-out">
            <div className="sm:w-6/12 w-full lg:px-1">
              <div className="w-full h-full p-4 rounded-md bg-white">
                <LineChart />
              </div>
            </div>
            <div className="sm:w-6/12 w-full lg:px-1">
              <div className="w-full h-full p-4 rounded-md bg-white">
                <WasteCollection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalQuadTest;
