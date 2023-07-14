import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { on } from '../utils/events';
import { useNavigate } from 'react-router-dom';

const TopBar: React.FC = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate('/login')
  }

  useEffect(() => {

    const token = localStorage.getItem("token");
    console.log('validating code', token);

    if(token === null || token === undefined){
      setIsLoggedIn(false);
    }else{
      setIsLoggedIn(true);
    }

    on('authed', () => {
      setIsLoggedIn(true)
    })

  }, []);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div>
          {
            isLoggedIn === true && 
            <>
              <NavLink
                to="/list-repos"
                className="text-gray-300 hover:text-white mr-4"
              >
                Repositories
              </NavLink>
              <NavLink
                to="/list-repos-fav"
                className="text-gray-300 hover:text-white"
              >
                Favorites
              </NavLink>
            </>
          }
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
            <>
              <Link to="/" className="text-gray-300 hover:text-white mr-4" onClick={logout}>
                Logout
              </Link>
              <Link to="/profile" className="text-gray-300 hover:text-white">
                Profile
              </Link>
            </>
          )
          }
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
