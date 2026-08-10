





import { Avatar, Button, Navbar, Dropdown } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
import { useState } from 'react';


export default function Header() {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };
  

  const handleSignInClick = () => {
    setIsMenuOpen(false);
    navigate('/sign-in');
  };

  return (
    <>
      {/* Navbar */}
      <Navbar className="fixed top-0 left-0 w-full z-10 bg-opacity-100 bg-slate-200">
        {/* <div className="flex items-center">
          <Link to="/" className="m-0 p-0">
            <img src={logo} alt="Logo" className="hidden md:block h-14" />
            <img src={logo} alt="Logo" className="block md:hidden h-10" />
          </Link>
        </div> */}
        <div className="flex ml-auto items-center">
          <div className="flex items-center">
            <Navbar.Toggle
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-12 w-12 md:hidden"
              style={{ transform: 'translateY(5px) translateX(-25px)' }}
            />
          </div>
          <div className="flex items-center ml-4">
            {currentUser ? (
              <Dropdown
                arrowIcon={false}
                inline
                label={<Avatar alt="user" img={currentUser.profilePicture} rounded className="h-20 w-20" />}
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <Dropdown.Header>
                  <span className="block text-sm">@{currentUser.username}</span>
                  <span className="block text-sm font-medium truncate">{currentUser.email}</span>
                </Dropdown.Header>
                <Link to="/dashboard?tab=profile">
                  <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
              </Dropdown>
            ) : (
              <Link to="/sign-in" className="ml-4">
                <Button className="bg-[#ffa500]" outline onClick={handleSignInClick}>
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>

        
      </Navbar>
    </>
  );
}




