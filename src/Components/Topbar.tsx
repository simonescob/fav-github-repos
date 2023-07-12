import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const TopBar: React.FC = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const logout = () => {
    localStorage.removeItem("token");
  }

  useEffect(() => {

    const token = localStorage.getItem("token");
    console.log('validating code', token);

    if(token === null || token === undefined){
      setIsLoggedIn(false);
    }else{
      setIsLoggedIn(true);
    }

  }, []);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div>
          <NavLink
            to="/list-repos"
            className="text-gray-300 hover:text-white mr-4"
          >
            Item List
          </NavLink>
          {isLoggedIn === true && (
            <NavLink
              to="/list-repos"
              className="text-gray-300 hover:text-white"
            >
              Favorite List
            </NavLink>
          )}
        </div>
        <div>
          {isLoggedIn === false ? (
            <>
              <Link
                to="/login"
                className="text-gray-300 hover:text-white mr-4"
              >
                Login
              </Link>
              <Link to="/register" className="text-gray-300 hover:text-white">
                Register
              </Link>
            </>
          ) :
          (
            <Link to="/" className="text-gray-300 hover:text-white" onClick={logout}>
              Logout
            </Link>
          )
          }
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
