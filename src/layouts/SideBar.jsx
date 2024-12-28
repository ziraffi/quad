import { Link, useLocation } from 'react-router-dom';
import { BiLogOutCircle } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';
import { PropTypes } from 'prop-types';

const SideBar = ({ showSideBar, setShowSideBar }) => {
  const handleToggleSidebar = () => {
    if (typeof setShowSideBar === 'function') {
      setShowSideBar(!showSideBar);
    } else {
      console.error('setShowSideBar is not a function');
    }
  };
  const { pathname } = useLocation();

  return (
    <div>
      {/* Overlay */}
      <div
        onClick={() => setShowSideBar(false)}
        className={`fixed duration-200 ${
          !showSideBar ? 'invisible' : 'visible'
        } w-screen h-screen backdrop-blur-md top-0 left-0 z-10`}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed w-[260px] top-0 bg-slate-200 h-screen 
        shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] z-50 transition-all ease-in-out ${
          showSideBar ? 'left-0' : '-left-[260px] lg:left-0'
        }`}
      >
        {/* Header */}
        <div className="flex flex-row justify-center items-center h-[60px] mt-[25px]">
          <Link
            to="/"
            className="w-[200px] h-[50px] text-left text-purple-600 text-2xl font-extrabold"
          >
            Admin Panel
          </Link>
          <div
            onClick={handleToggleSidebar}
            className="absolute top-0 right-0 w-[35px] flex lg:hidden h-[35px] rounded-sm bg-slate-200 shadow-lg hover:shadow-indigo-500/50 justify-center items-center cursor-pointer"
          >
            <span>
              <RxCross1 />
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="gap-5 pl-[20px]">
          <ul className="flex-col">
            <li>
              <Link
                to="/dashboard"
                className={`${
                  pathname === '/dashboard'
                    ? 'bg-gray-600 shadow-indigo-500/50 text-white duration-500'
                    : 'text-neutral-800 font-bold duration-200'
                } px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] 
                hover:pl-4 hover:bg-slate-300 hover:text-green-950 hover:text-md hover:font-bold hover:transition-all ease-in-out w-full mb-1`}
              >
                <span className="text-grey-500">🏠</span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <button className="text-[#030811] font-bold duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1">
                <span>
                  <BiLogOutCircle />
                </span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  showSideBar: PropTypes.bool.isRequired,
  setShowSideBar: PropTypes.func.isRequired,
};

export default SideBar;
