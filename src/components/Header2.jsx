import React, { useState } from 'react'; 
import { Avatar, Button, Dropdown } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
import logo from '../assets/logos/ovahglo.logo.jpg'; // Import logo image
import flag from '../assets/Website Header Images/Zambian Flag.jpg'; // Import logo image

const Header2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGroup1Open, setIsGroup1Open] = useState(false);
  const [isGroup2Open, setIsGroup2Open] = useState(false);
  const [isGroup3Open, setIsGroup3Open] = useState(false);

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

  const handleSignInClick = () => {
    setIsMenuOpen(false);
    // navigate('/sign-in');
    navigate('/');
  };

  const closeMenu = () => setIsMenuOpen(false);

  const toggleGroup = (group) => {
    if (group === 1) setIsGroup1Open(!isGroup1Open);
    if (group === 2) setIsGroup2Open(!isGroup2Open);
    if (group === 3) setIsGroup3Open(!isGroup3Open);
  };

  return (
    <header className="bg-slate-700 text-white shadow-md py-4 opacity-100">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt=" Logo" className="h-24 w-auto" />
        </a>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          {/* About Us Dropdown */}
          <div className="group relative">
            <a href="/" className="text-white text-sm font-semibold p-1 hover:bg-white hover:text-blue-700">HOME</a>
          </div>
          {/* <div className="group relative">
            <a href="/about" className="text-white text-sm font-semibold p-1 hover:bg-white hover:text-blue-700">ABOUT US</a>
          </div> */}
          <Link to="/about" className="text-white text-sm font-semibold p-1 hover:bg-white hover:text-blue-700">
  ABOUT US
</Link>

          {/* Services Dropdown */}
          {/* <div className="group relative">
            <button className="text-white text-sm font-semibold p-1 hover:bg-white hover:text-blue-700 flex items-center">
              Our Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 hidden space-y-2 bg-white text-black group-hover:block w-48 py-2 rounded-lg shadow-lg z-50">
              <a href="/services" className="block px-4 py-2 text-blue-700 hover:bg-blue-700 hover:text-white text-xs font-semibold"> See All Our Services</a>
              <a href="/web-development" className="block px-4 py-2 text-blue-700 hover:bg-blue-700 hover:text-white text-xs font-semibold"> Web Development</a>
              <a href="/app-development" className="block px-4 py-2 text-blue-700 hover:bg-blue-700 hover:text-white text-xs font-semibold">App Development</a>
              <a href="/management-systems" className="block px-4 py-2 text-blue-700 hover:bg-blue-700 hover:text-white text-xs font-semibold">Management Systems</a>
              <a href="/marketing" className="block px-4 py-2 text-blue-700 hover:bg-blue-700 hover:text-white text-xs font-semibold">Digital Marketing</a>
            </div>
          </div> */}

          

          {/* Products Link */}
          {/* <div className="group relative">
            
            <a href="#" className="text-white text-sm font-semibold p-1 hover:bg-white hover:text-blue-700">PRODUCTS</a>
          </div> */}
          
          <div className="group relative">
            {/* services */}
            {/* <a href="/#" className="text-white text-sm font-semibold p-1 hover:bg-white hover:text-blue-700">SERVICES</a> */}
          </div>
          
          <div className="group relative">
            <a href="/systems" className="text-white text-sm font-semibold p-1 hover:bg-white hover:text-blue-700">SERVICES</a>
          </div>
         
          <div className="group relative">
            <a href="/contact" className="text-white text-sm font-semibold p-1 hover:bg-white hover:text-blue-700">CONTACT US</a>
          </div>
        
          <div className="group relative">
            {/* ref-projects */}
            <a href="#" className="text-white text-sm font-semibold p-1 hover:bg-white hover:text-blue-700">REFERENCE PROJECTS</a>
          </div>
          {/* blog Link */}
          {/*<div className="group relative">
            <a href="/search" className="text-white text-sm font-semibold p-1 hover:bg-white hover:text-blue-700">Blog</a>
          </div>*/}

         
        </nav>

         {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
           <button 
             className="text-white ml-4" 
             onClick={() => setIsMenuOpen(!isMenuOpen)} 
             aria-label="Toggle Menu"
           >
             {isMenuOpen ? (
               <svg className="w-18 h-10 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
               </svg>
             ) : (
               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
               </svg>
             )}
           </button>
         </div>




        {/* User Authentication (Mobile & Desktop) */}
        <div className="flex items-center ml-4">
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="user" img={currentUser.profilePicture} rounded className="h-10 w-10" />}
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
            <button
              className="bg-slate-700 text-slate-700 text-xs py-1 px-3 rounded-md border border-slate-700 hover:bg-slate-700 hover:text-white focus:ring-2 focus:ring-blue-700 transition-all duration-300"
              onClick={handleSignInClick}
              
            >
              {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={flag} alt="Zambian Flag" className="h-12 w-auto" />
        </a>
            {/* Sign in */}
            </button>
          )}
        </div>

    

      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white text-blue-700 px-4 py-4 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'scale-100' : 'scale-95'} `}
      >
        <nav className="space-y-2 text-sm">
        <div className="space-y-2">
              <a href="/" className="block text-blue-700 hover:text-white p-1 hover:bg-blue-700 text-sm font-semibold" onClick={closeMenu}>Home</a>
            </div>
        <div className="space-y-2">
              <a href="/about" className="block text-blue-700 hover:text-white p-1 hover:bg-blue-700 text-sm font-semibold" onClick={closeMenu}>About Us</a>
            </div>

          
          
          

                      <div className="space-y-2">
              <a href="/#" className="block text-blue-700 hover:text-white p-1 hover:bg-blue-700 text-sm font-semibold" onClick={closeMenu}>Products</a>
            </div>
            <div className="space-y-2">
              <a href="/services" className="block text-blue-700 hover:text-white p-1 hover:bg-blue-700 text-sm font-semibold" onClick={closeMenu}>Services</a>
            </div>
            <div className="space-y-2">
              <a href="/#" className="block text-blue-700 hover:text-white p-1 hover:bg-blue-700 text-sm font-semibold" onClick={closeMenu}>Systems</a>
            </div>
            <div className="space-y-2">
              <a href="/contact" className="block text-blue-700 hover:text-white p-1 hover:bg-blue-700 text-sm font-semibold" onClick={closeMenu}>Contact Us</a>
            </div>
            <div className="space-y-2">
              <a href="/#" className="block text-blue-700 hover:text-white p-1 hover:bg-blue-700 text-sm font-semibold" onClick={closeMenu}>Reference Projects</a>
            </div>
            


        </nav>
      </div>
    </header>
  );
};

export default Header2;



// import React, { useState } from 'react';
// import { Avatar, Button, Dropdown } from 'flowbite-react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { signoutSuccess } from '../redux/user/userSlice';

// const Header2 = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector((state) => state.user);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleSignout = async () => {
//     try {
//       const res = await fetch('/api/user/signout', { method: 'POST' });
//       const data = await res.json();
//       if (!res.ok) {
//         console.log(data.message);
//       } else {
//         dispatch(signoutSuccess());
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const handleSignInClick = () => {
//     setIsMenuOpen(false);
//     navigate('/sign-in');
//   };

//   const closeMenu = () => setIsMenuOpen(false);

//   return (
//     <header className="bg-blue-600 text-white shadow-md py-4">
//       <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
//         {/* Logo */}
//         <a href="/" className="text-xl font-bold">ABNationTech</a>

//         {/* Navigation (Desktop) */}
//         <nav className="hidden md:flex space-x-6">
//           <a href="/about" className="hover:text-yellow-300">About Us</a>
//           <a href="/services" className="hover:text-yellow-300">Services</a>
//           <a href="/projects" className="hover:text-yellow-300">Our Projects</a>
//           <a href="/pricing" className="hover:text-yellow-300">Pricing</a>
//           <a href="/contact" className="hover:text-yellow-300">Contact</a>
//           <a href="/our-tools" className="hover:text-yellow-300">Our Tools</a>
//           <a href="/lmm-zambia" className="hover:text-yellow-300">Birthday</a>
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button 
//             className="text-white" 
//             onClick={() => setIsMenuOpen(!isMenuOpen)} 
//             aria-label="Toggle Menu"
//           >
//             {isMenuOpen ? (
//               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* User Authentication (Mobile & Desktop) */}
//         <div className="flex items-center ml-4">
//           {currentUser ? (
//             <Dropdown
//               arrowIcon={false}
//               inline
//               label={<Avatar alt="user" img={currentUser.profilePicture} rounded className="h-10 w-10" />}
//               onClick={() => setIsMenuOpen((prev) => !prev)}
//             >
//               <Dropdown.Header>
//                 <span className="block text-sm">@{currentUser.username}</span>
//                 <span className="block text-sm font-medium truncate">{currentUser.email}</span>
//               </Dropdown.Header>
//               <Link to="/dashboard?tab=profile">
//                 <Dropdown.Item>Profile</Dropdown.Item>
//               </Link>
//               <Dropdown.Divider />
//               <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
//             </Dropdown>
//           ) : (
//             <Button className="bg-blue-600 text-white text-xs py-2 px-0 rounded-md shadow-sm border border-blue-600 hover:bg-blue-700 hover:border-blue-700 focus:ring-2 focus:ring-blue-500 transition-all duration-300" outline onClick={handleSignInClick}>
//               Sign In
//             </Button>
//           )}
//         </div>

        



//       </div>

//       {/* Mobile Menu */}
//       <div 
//         className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-blue-600 text-white px-4 py-4 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'scale-100' : 'scale-95'} `}
//       >
//         <nav className="space-y-6 text-lg">
//           <a href="/about" className="block hover:text-yellow-300" onClick={closeMenu}>About Us</a>
//           <a href="/services" className="block hover:text-yellow-300" onClick={closeMenu}>Services</a>
//           <a href="/pricing" className="block hover:text-yellow-300" onClick={closeMenu}>Pricing</a>
//           <a href="/contact" className="block hover:text-yellow-300" onClick={closeMenu}>Contact</a>
//           <a href="/lmm-zambia" className="block hover:text-yellow-300" onClick={closeMenu}>Birthday</a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header2;



