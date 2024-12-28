import Header from "./layouts/Header";
import SideBar from "./layouts/SideBar";
import Dashboard from "./layouts/Dashboard";
import { useState } from "react";

const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="bg-[#ddd6fe] w-full min-h-screen">
      <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all ease-in-out">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
