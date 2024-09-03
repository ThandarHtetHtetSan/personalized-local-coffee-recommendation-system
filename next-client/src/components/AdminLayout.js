import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronDown, faTachometerAlt, faUsers, faCogs, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const primaryColor = "#38220f";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("");
  const router = useRouter();

  useEffect(() => {
    setActiveMenu(router.pathname);
  }, [router.pathname]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-white text-[${primaryColor}] ${
          isSidebarOpen ? 'w-64' : 'w-20'
        } transition-all duration-300 ease-in-out shadow-lg relative`}
      >
        <div className="flex items-center justify-between p-4">
          <span className={`text-xl font-semibold text-${primaryColor} ${!isSidebarOpen && 'hidden'}`}>Coffee Diary</span>
          <button onClick={toggleSidebar} className="focus:outline-none">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className={`w-6 h-6 transform transition-transform duration-300 text-${primaryColor} ${
                isSidebarOpen ? 'rotate-90' : 'rotate-0'
              }`}
            />
          </button>
        </div>
        <nav className="space-y-2">
          <MenuItem
            title="Dashboard"
            href="/admin"
            icon={faTachometerAlt}
            isSidebarOpen={isSidebarOpen}
            isActive={activeMenu === "/admin"}
          />
          <MenuItem
            title="Coffees"
            icon={faUsers}
            isSidebarOpen={isSidebarOpen}
            isActive={activeMenu.includes("/admin/coffees")}
          >
            <SubMenu
              title="Coffees List"
              href="/admin/coffees"
              icon={faUsers}
              isSidebarOpen={isSidebarOpen}
              isActive={activeMenu === "/admin/coffees"}
            />
            <SubMenu
              title="Add Coffee"
              href="/admin/coffees/add-coffee"
              icon={faUserPlus}
              isSidebarOpen={isSidebarOpen}
              isActive={activeMenu === "/admin/coffees/add-coffee"}
            />
          </MenuItem>
          <MenuItem
            title="Recipes"
            icon={faUsers}
            isSidebarOpen={isSidebarOpen}
            isActive={activeMenu.includes("/admin/recipes")}
          >
            <SubMenu
              title="Recipes List"
              href="/admin/recipes"
              icon={faUsers}
              isSidebarOpen={isSidebarOpen}
              isActive={activeMenu === "/admin/recipes"}
            />
            <SubMenu
              title="Add Recipes"
              href="/admin/recipes/add-recipe"
              icon={faUserPlus}
              isSidebarOpen={isSidebarOpen}
              isActive={activeMenu === "/admin/recipes/add-recipe"}
            />
          </MenuItem>
          <MenuItem
            title="Settings"
            href="/admin/settings"
            icon={faCogs}
            isSidebarOpen={isSidebarOpen}
            isActive={activeMenu === "/admin/settings"}
          />
        </nav>
      </div>

      {/* Page Content */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

function MenuItem({ title, href, icon, children, isSidebarOpen, isActive, onClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isActive) {
      setIsOpen(true);
    }
  }, [isActive]);

  const handleClick = () => {
    if (href) {
      router.push(href)
      return
    }
    setIsOpen(!isOpen);
    if (onClick) onClick();
  };

  return (
    <div className="relative group">
      <button
        className={`flex items-center justify-between w-full p-3 ${isActive ? `bg-[${primaryColor}] text-white` : ''} hover:bg-[${primaryColor}] hover:text-white focus:outline-none`}
        onClick={handleClick}
      >
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={icon} className={`text-${primaryColor}`} />
          <span
            className={`transition-opacity duration-300 ${
              isSidebarOpen ? 'opacity-100' : `opacity-0 group-hover:opacity-100 bg-white text-[${primaryColor}] absolute left-full ml-2 p-2 rounded shadow-lg whitespace-nowrap`
            }`}
          >
            {title}
          </span>
        </div>
        {children && (
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`transform transition-transform duration-300 text-${primaryColor} ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        )}
      </button>
      {children && (
        <div
          className={`transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen' : 'max-h-0'
          } overflow-hidden`}
        >
          <div className={`${isSidebarOpen ? 'pl-6' : 'pl-2'}`}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

function SubMenu({ title, href, icon, isSidebarOpen, isActive }) {
  return (
    <div className={`py-2 submenu`}>
      <Link href={href} className={`block p-2 hover:bg-[${primaryColor}] hover:text-white rounded-md ${isActive ? `bg-[${primaryColor}] text-white` : ''}`}>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={icon} className={`text-${primaryColor}`} />
          {isSidebarOpen && <span className={`text-${primaryColor}`}>{title}</span>}
          {!isSidebarOpen && (
            <span
              className={`absolute left-full ml-2 p-2 bg-white text-[${primaryColor}] opacity-0 rounded shadow-lg whitespace-nowrap transition-opacity duration-300`}
            >
              {title}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}