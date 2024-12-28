import { FaList } from 'react-icons/fa';
import { PropTypes } from 'prop-types';

const Header = ({ showSideBar, setShowSideBar }) => {
  const handleToggleSidebar = () => {
    if (typeof setShowSideBar === 'function') {
      setShowSideBar(!showSideBar);
    } else {
      console.error('setShowSideBar is not a function');
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40 backdrop-blur-md">
      <div className="flex justify-between items-center lg:justify-self-end ml-0 lg:ml-[260px] rounded-md h-[64px] bg-purple-300 px-5 transition-all ease-in-out">
        <div
          onClick={handleToggleSidebar}
          className="w-[35px] flex lg:hidden h-[35px] rounded-sm bg-slate-200 shadow-lg hover:shadow-indigo-500/50 justify-center items-center cursor-pointer"
        >
          <span>
            <FaList />
          </span>
        </div>
        <div className="flex justify-center items-center gap-8 relative">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-3">
              <div className="flex justify-center items-center text-end flex-col">
                <h1 className="font-bold text-md">Rajkiran Dev</h1>
                <span className="text-[14px] font-normal w-full">Admin</span>
              </div>
              <img
                className="w-10 h-15 rounded-full"
                src={`${import.meta.env.VITE_BASE_URL}/dev.png`}
                alt="Admin Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  showSideBar: PropTypes.bool.isRequired,
  setShowSideBar: PropTypes.func.isRequired,
};

export default Header;
