// src/Footer.jsx
import m5 from '../images/ms5.jpg'; 
import f1 from '../images/f1.jpg'; 
import f2 from '../images/f2.jpg'; 
import f3 from '../images/f3.jpg'; 
import f4 from '../images/f4.jpg'; 
import f5 from '../images/f5.jpg'; 


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 py-6">
      <div className="container mx-auto">
        {/* First Division */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 bg-[#12151A] p-4 rounded-lg">
          {/* Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex flex-col space-y-2 text-center md:text-left">
              <h3 className="text-lg font-semibold">About</h3>
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">Product</a>
            </div>
            <div className="flex flex-col space-y-2 text-center md:text-left">
              <h3 className="text-lg font-semibold">Support</h3>
              <a href="#" className="hover:underline">Activate</a>
              <a href="#" className="hover:underline">Login</a>
            </div>
          </div>
          {/* Social Media Logos */}
               {/* Social Media Logos */}
<div className="flex space-x-4 mt-4 md:mt-0">
  <a href="#" className="hover:opacity-80 transition-opacity duration-300">
    <img src={f1} alt="YouTube" className="w-6 h-6" />
  </a>
  <a href="#" className="hover:opacity-80 transition-opacity duration-300">
    <img src={f2} alt="Twitter" className="w-6 h-6" />
  </a>
  <a href="#" className="hover:opacity-80 transition-opacity duration-300">
    <img src={f3} alt="Facebook" className="w-6 h-6" />
  </a>
  <a href="#" className="hover:opacity-80 transition-opacity duration-300">
    <img src={f4} alt="Instagram" className="w-6 h-6" />
  </a>
  <a href="#" className="hover:opacity-80 transition-opacity duration-300">
    <img src={f5} alt="Picsart" className="w-6 h-6" />
  </a>
</div>

          

        </div>

        {/* Second Division */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-cover bg-center bg-[url('/path/to/your-background-image.jpg')] hover:bg-opacity-90 transition-all duration-300 p-4 rounded-lg">
          {/* Logo and Name */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0 text-center md:text-left transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100 p-4 rounded-lg">
  <img 
    src={m5} 
    alt="Firebee" 
    className="w-24 h-auto object-cover rounded-full shadow-md transition-transform duration-300 hover:scale-110" 
  />
  <span className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600">
    Firebee
  </span>
</div>

          {/* Privacy Policy and Description */}
          <div className="text-center">
            <a href="#" className="block text-sm mb-2 hover:underline">Privacy Policy</a>
            <p className="text-sm">&copy; 2024 Firebee. All rights reserved.</p>
            <p className="text-sm mt-2">The statements on this page have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
