// // src/components/Header.jsx

// import logo from '../images/logo1.png'; // Adjust the path as needed
// import userIcon from '../images/profile.png'; // Adjust the path as needed
// import image from '../images/image.png'; // Adjust the path as needed

// const Header = () => {
//   return (
//     <>
//      <header className="relative w-full h-20 bg-no-repeat flex items-center top-0 left-0 transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
//   {/* Left Image */}
//   <div
//     className="flex-1 h-full bg-cover bg-left transition-transform duration-300 hover:scale-105"
//     style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
//   ></div>

//   {/* Center Text */}
//   <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 px-4 transition-transform duration-300 hover:scale-105">
//     Black Friday Sale - Save $100
//   </div>

//   {/* Right Image */}
//   <div
//     className="flex-1 h-full bg-cover bg-right transition-transform duration-300 hover:scale-105"
//     style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
//   ></div>
// </header>

//       {/* New Header with Logo, Navigation, Buy Now Button, and User Icon */}
//       <header className="w-full h-20 flex items-center justify-between px-4 bg-white shadow-md mt-4">
//         {/* Left: Logo */}
//         <div className="flex items-center">
//         <img 
//       src={logo} 
//       alt="Firebee Logo" 
//       className="h-12 mr-6 transition-transform duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg"
//     />        </div>

//         {/* Center: Navigation Links */}
//         <nav className="flex-1">
//   <ul className="flex justify-center space-x-8">
//     <li className="text-black hover:text-blue-500 transition-colors">
//       <a href="#how-it-works">How It Works</a>
//     </li>
//     <li className="text-black hover:text-blue-500 transition-colors">
//       <a href="#signals">Signals</a>
//     </li>
//     <li className="text-black hover:text-blue-500 transition-colors">
//       <a href="#reviews">Reviews</a>
//     </li>
//     <li className="text-black hover:text-blue-500 transition-colors">
//       <a href="#blog">Blog</a>
//     </li>
//   </ul>
// </nav>


//         {/* Right: Buy Now Button and User Icon */}
//         <div className="flex items-center space-x-4">
//           <button className="bg-green-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-green-600 transition duration-300">
//             Buy Now
//           </button>
//           <img src={userIcon} alt="User Login" className="h-8 w-8 rounded-full" />
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;
import React from 'react';
import logo from '../images/logo1.png'; // Adjust the path as needed
import userIcon from '../images/profile.png'; // Adjust the path as needed
import image from '../images/image.png'; // Adjust the path as needed

const Header = ({ onCartClick, onLoginClick }) => {
  return (
    <>
      {/* Original Header with Images and Sale Text */}
      <header className="relative w-full h-20 bg-no-repeat flex items-center top-0 left-0 transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
        {/* Left Image */}
        <div
          className="flex-1 h-full bg-cover bg-left transition-transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
        ></div>

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 px-4 transition-transform duration-300 hover:scale-105">
          Black Friday Sale - Save $100
        </div>

        {/* Right Image */}
        <div
          className="flex-1 h-full bg-cover bg-right transition-transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
        ></div>
      </header>

      {/* New Header with Logo, Navigation, Buy Now Button, and User Icon */}
      <header className="w-full h-20 flex items-center justify-between px-4 bg-white shadow-md mt-4">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Firebee Logo"
            className="h-12 mr-6 transition-transform duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg"
          />
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex-1">
          <ul className="flex justify-center space-x-8">
            <li className="text-black hover:text-blue-500 transition-colors">
              <a href="#how-it-works">How It Works</a>
            </li>
            <li className="text-black hover:text-blue-500 transition-colors">
              <a href="#signals">Signals</a>
            </li>
            <li className="text-black hover:text-blue-500 transition-colors">
              <a href="#reviews">Reviews</a>
            </li>
            <li className="text-black hover:text-blue-500 transition-colors">
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </nav>

        {/* Right: Buy Now Button and User Icon */}
        <div className="flex items-center space-x-4">
          <button
            className="bg-green-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-green-600 transition duration-300"
            onClick={onCartClick} // Trigger cart modal
          >
            Buy Now
          </button>
          <img
            src={userIcon}
            alt="User Login"
            className="h-8 w-8 rounded-full cursor-pointer"
            onClick={onLoginClick} // Trigger login modal
          />
        </div>
      </header>
    </>
  );
};

export default Header;
