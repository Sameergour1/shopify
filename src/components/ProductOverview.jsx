 // Assuming you have a user icon image
import left1 from '../images/l1.jpg'; 
import left2 from '../images/left02.jpg'; 
import leftimg3 from '../images/left3.jpg'; 
import leftimg41 from '../images/ii1.jpg'; 
import leftimg42 from '../images/ii2.jpg'; 
import leftimg43 from '../images/ii3.jpg'; 
import leftimg44 from '../images/ii4.jpg'; 
import leftimg45 from '../images/ii5.jpg'; 
import leftimg5 from '../images/icon51.png'; 
import leftimg6 from '../images/icon52.png'; 
import leftimg7 from '../images/icon53.png'; 
import leftimg8 from '../images/icon54.png'; 
import imgvisa1 from '../images/v1.jpg'; 
import imgvisa2 from '../images/v2.jpg'; 
import imgvisa3 from '../images/v3.jpg'; 
import imgvisa4 from '../images/v4.jpg'; 
import imgvisa5 from '../images/v5.jpg'; 
import imgvisa6 from '../images/v6.jpg'; 
import logo30 from '../images/logo30.jpg'; 
import des01 from '../images/des1.png'; 
import des02 from '../images/des02.png'; 
import m1 from '../images/ms1.jpg'; 
import m2 from '../images/ms2.jpg'; 
import m3 from '../images/ms3.jpg'; 
import m4 from '../images/ms4.jpg'; 
import m5 from '../images/ms5.jpg'; 
import m01 from '../images/ms01.jpg'; 
import m02 from '../images/ms02.jpg'; 
import m03 from '../images/ms03.jpg'; 
import mis from '../images/mis.jpg'; 
import box from '../images/box.jpg'; 
import b1 from '../images/box01.png'; 
 

function ProductOverview() {
  return (
    <div>

        
<section className="product-overview container mx-auto flex flex-col md:flex-row items-center my-8 bg-gray-100">
  {/* Left Side: Three Divisions */}
  
  <div className="left-side flex-1 grid grid-cols-1 gap-4 mb-4 md:mb-0">


    
  <div className="left-side flex-1 grid grid-cols-1 gap-4 mb-4 md:mb-0">
  {/* Left Division 1 with Two Images */}
  <div className="left-item grid grid-cols-2 gap-4 bg-gray-100 p-6 rounded-lg">
    <div className="flex justify-center items-center space-x-4">
      <img 
        src={left1} 
        alt="logo" 
        className="w-[170px] h-[170px] rounded-full shadow-lg border-4 border-gray-300 hover:border-blue-500 hover:scale-105 transition-transform transition-colors duration-300" 
      />
      <img 
        src={left2} 
        alt="logo" 
        className="w-[170px] h-[170px] rounded-full shadow-lg border-4 border-gray-300 hover:border-blue-500 hover:scale-105 transition-transform transition-colors duration-300" 
      />
    </div>
  </div>
</div>




    
  {/* Left Division 2 with One Large Image */}
<div className="left-item bg-gray-100 p-4">
  <div className="single-image-box p-2 rounded-lg bg-white overflow-hidden">
    <img 
      src={leftimg3} 
      alt="Single Large Image" 
      className="w-[900px] h-[400px] object-cover transition-transform duration-300 transform hover:scale-105 hover:opacity-90" 
    />
  </div>
</div>

  

   {/* Left Division 3 with Five Images */}
<div className="left-item bg-gray-100 p-4">
  <div className="grid grid-cols-5 gap-4">
    <div className="image-container relative overflow-hidden rounded-lg bg-gray-200">
      <img 
        src={leftimg41} 
        alt="Single Large Image" 
        className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105 hover:opacity-90" 
      />
    </div>
    <div className="image-container relative overflow-hidden rounded-lg bg-gray-200">
      <img 
        src={leftimg42} 
        alt="Single Large Image" 
        className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105 hover:opacity-90" 
      />
    </div>
    <div className="image-container relative overflow-hidden rounded-lg bg-gray-200">
      <img 
        src={leftimg43} 
        alt="Single Large Image" 
        className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105 hover:opacity-90" 
      />
    </div>
    <div className="image-container relative overflow-hidden rounded-lg bg-gray-200">
      <img 
        src={leftimg44} 
        alt="Single Large Image" 
        className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105 hover:opacity-90" 
      />
    </div>
    <div className="image-container relative overflow-hidden rounded-lg bg-gray-200">
      <img 
        src={leftimg45} 
        alt="Single Large Image" 
        className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105 hover:opacity-90" 
      />
    </div>
  </div>
</div>

  
{/* Left Division 4 with Four Icons and Descriptions */}
<div className="left-item grid grid-cols-2 gap-6 bg-gray-100 p-4">
  <div className="icon-description flex items-center text-center bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
    <img 
      src={leftimg5} 
      alt="Icon 1" 
      className="w-[50px] h-[50px] object-cover mr-4 transition-transform duration-300 hover:scale-110"
    />
    <p className="text-sm font-semibold">Authorized</p>
  </div>

  <div className="icon-description flex items-center text-center bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
    <img 
      src={leftimg6} 
      alt="Icon 2" 
      className="w-[50px] h-[50px] object-cover mr-4 transition-transform duration-300 hover:scale-110"
    />
    <p className="text-sm font-semibold">Free shipping <br /> Within USA</p>
  </div>

  <div className="icon-description flex items-center text-center bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
    <img 
      src={leftimg7} 
      alt="Icon 3" 
      className="w-[50px] h-[50px] object-cover mr-4 transition-transform duration-300 hover:scale-110"
    />
    <p className="text-sm font-semibold">Signal Catalogue <br />Updates Included</p>
  </div>

  <div className="icon-description flex items-center text-center bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
    <img 
      src={leftimg8} 
      alt="Icon 4" 
      className="w-[50px] h-[50px] object-cover mr-4 transition-transform duration-300 hover:scale-110"
    />
    <p className="text-sm font-semibold">Customer Support via <br />E-mail, Phone, and Chat</p>
  </div>
</div>



    </div>
  

  {/* Right Side: Three Divisions + Button + Small Division */}
  <div className="right-side flex-1 grid grid-cols-1 gap-4 text-center md:text-left bg-gray-100">



  <div className="right-item bg-gray-100 p-4 relative">
  {/* <!-- Main Heading --> */}
  <h1 className="text-[#3F3631] text-[36px] font-[700] leading-[54px] font-poppins mb-2">
    Firebee Headband
  </h1>
  
  {/* <!-- Subheading with Star Pattern --> */}
  <div className="relative mb-4">
    <div className="flex items-center space-x-2">
      {/* Star Emoji and Reviews */}
      <span className="text-yellow-500 text-xl">⭐⭐⭐⭐</span>
      <p className="text-sm font-medium">267 Reviews</p>
    </div>
  </div>
  
  {/* <!-- Paragraph --> */}
  <p>Order today and receive your Firebee by June 15th, 2021</p>
</div>







    
<div className="border border-blue-500 rounded-md p-4 bg-gray-100">
  <h2 className="text-2xl font-bold ">Firebee Starter Kit</h2>
  <p className="text-lg font-medium text-red-500 line-through">
    $999.00
  </p>
  <p className="text-lg font-medium text-green-500">$379.00</p>
  <button className="bg-gradient-to-r from-[#A34D9F] to-[#275FD0] hover:opacity-90 text-white font-bold py-2 px-4 rounded-full">
  MOST POPULAR KIT
</button>


<ul className="list-disc mt-4">
  <li className="flex items-center">
    <input 
      type="checkbox" 
      className="w-5 h-5 rounded-md cursor-pointer mr-2 bg-gradient-to-br from-blue-400 to-green-400 border-gray-300 text-white checked:bg-gradient-to-br checked:from-blue-400 checked:to-green-400 focus:ring-0 focus:ring-offset-0 focus:outline-none appearance-none checked:relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-sm checked:after:left-1 checked:after:top-0.5" 
      checked 
    />
    <span>Access to 7 signals (and future signal releases)</span>
  </li>
  <li className="flex items-center">
    <input 
      type="checkbox" 
      className="w-5 h-5 rounded-md cursor-pointer mr-2 bg-gradient-to-br from-blue-400 to-green-400 border-gray-300 text-white checked:bg-gradient-to-br checked:from-blue-400 checked:to-green-400 focus:ring-0 focus:ring-offset-0 focus:outline-none appearance-none checked:relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-sm checked:after:left-1 checked:after:top-0.5" 
      checked 
    />
    <span>Firebee Headband</span>
  </li>
  <li className="flex items-center">
    <input 
      type="checkbox" 
      className="w-5 h-5 rounded-md cursor-pointer mr-2 bg-gradient-to-br from-blue-400 to-green-400 border-gray-300 text-white checked:bg-gradient-to-br checked:from-blue-400 checked:to-green-400 focus:ring-0 focus:ring-offset-0 focus:outline-none appearance-none checked:relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-sm checked:after:left-1 checked:after:top-0.5" 
      checked 
    />
    <span>$19/month membership, first 2 months free</span>
  </li>
</ul>





  
  <p className="mt-4">
    The starter kit is the most affordable way to get started with Firebee. Pay
    $299 for the Firebee headband and access to the entire Firebee Signal
    Catalogue for only $19 a month. 
  </p>
  <p className="font-bold">Membership can be cancelled anytime.No contracts. Satisfaction guaranteed.</p>
</div>


{/* !-- this is right section second  */}



<div className="border border-blue-500 rounded-md p-4 bg-gray-100">
  <h2 className="text-2xl font-bold">Founder's kit</h2>
 
 


<ul className="list-disc mt-4">
  <li className="flex items-center">
    <input 
      type="checkbox" 
      className="w-5 h-5 rounded-md cursor-pointer mr-2 bg-gradient-to-br from-blue-400 to-green-400 border-gray-300 text-white checked:bg-gradient-to-br checked:from-blue-400 checked:to-green-400 focus:ring-0 focus:ring-offset-0 focus:outline-none appearance-none checked:relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-sm checked:after:left-1 checked:after:top-0.5" 
      checked 
    />
    <span>Access to 7 signals (and future signal releases)</span>
  </li>
  <li className="flex items-center">
    <input 
      type="checkbox" 
      className="w-5 h-5 rounded-md cursor-pointer mr-2 bg-gradient-to-br from-blue-400 to-green-400 border-gray-300 text-white checked:bg-gradient-to-br checked:from-blue-400 checked:to-green-400 focus:ring-0 focus:ring-offset-0 focus:outline-none appearance-none checked:relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-sm checked:after:left-1 checked:after:top-0.5" 
      checked 
    />
    <span>Firebee Headband</span>
  </li>
  <li className="flex items-center">
    <input 
      type="checkbox" 
      className="w-5 h-5 rounded-md cursor-pointer mr-2 bg-gradient-to-br from-blue-400 to-green-400 border-gray-300 text-white checked:bg-gradient-to-br checked:from-blue-400 checked:to-green-400 focus:ring-0 focus:ring-offset-0 focus:outline-none appearance-none checked:relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-sm checked:after:left-1 checked:after:top-0.5" 
      checked 
    />
    <span>No Monthly Membership</span>
  </li>
</ul>





  
  <p className="mt-4">
  The Founders kit allows you to get the Firebee headband and lifetime access to the entire Firebee Signal Catalogue for a one-time payment. The Founders is kit can be paid through Affirm allowing customers to make small payments of $73 a month. 
  </p>
</div>





    

    {/* Button third division */}
    {/* Button */}
{/* Button */}
{/* Button */}
<div className="mt-4 flex justify-center">
  <button className="bg-[#07C961] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#05a849] transition duration-300 w-full max-w-xs flex items-center justify-center">
    <span className="text-2xl">
      &rarr; {/* Unicode right arrow */}
    </span>
  </button>
</div>



    {/* Foth right division */}

{/* Forth right division */}
<div className="small-division bg-white p-4 mt-4 flex items-center space-x-4">
  <img 
    src={imgvisa1} // Replace with your first image source variable
    alt="Description 1" 
    className="w-24 h-15 object-cover border-2 border-gray-300 rounded-lg transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:border-blue-500"
  />
  <img 
    src={imgvisa2} // Replace with your second image source variable
    alt="Description 2" 
    className="w-24 h-15 object-cover border-2 border-gray-300 rounded-lg transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:border-blue-500"
  />
  <img 
    src={imgvisa3} // Replace with your third image source variable
    alt="Description 3" 
    className="w-24 h-15 object-cover border-2 border-gray-300 rounded-lg transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:border-blue-500"
  />
  <img 
    src={imgvisa4} // Replace with your fourth image source variable
    alt="Description 4" 
    className="w-24 h-15 object-cover border-2 border-gray-300 rounded-lg transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:border-blue-500"
  />
  <img 
    src={imgvisa5} // Replace with your fifth image source variable
    alt="Description 5" 
    className="w-24 h-15 object-cover border-2 border-gray-300 rounded-lg transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:border-blue-500"
  />
  <img 
    src={imgvisa6} // Replace with your sixth image source variable
    alt="Description 6" 
    className="w-24 h-15 object-cover border-2 border-gray-300 rounded-lg transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:border-blue-500"
  />
</div>




  </div>


</section>

{/* !-- second section  */}



<section className="guarantee bg-white py-8">
  <div className="container mx-auto flex items-center justify-center text-center">
    {/* Image on the left, centered vertically */}
    <img 
      src={logo30} 
      alt="30 Day Money Back Guarantee" 
      className="w-40 h-40 rounded-full bg-transparent" 
    />
    
    {/* Text on the right, centered vertically */}
    <div className="ml-8 text-left">
      <h2 className="text-2xl font-semibold mb-2">30 Day Money Back Guarantee</h2>
      <p className="text-lg leading-relaxed">
        At Firebee we believe in building quality products that actually work.<br/>
        Firebee and its partners have invested over $85 million in research and <br/>
        development to create the highest quality wearable for customers to <br/>
        enjoy. If for any reason if you are not satisfied with your Firebee headband <br/>
        we will happily refund your purchase.
      </p>
    </div>
  </div>
</section>






    {/* !-- section below 30 logo */}


    <section className="firebee-signals py-8">
  <div className="container mx-auto text-center relative">
    <h2 className="text-4xl font-semibold mb-8 text-[#3F3631]">Firebee Signals</h2>
    <p className="mb-8 text-[#3F3631]">A signal for every situation</p>

    {/* New Division - Image Only */}
    <div className="absolute top-0 left-0 p-4 z-10">
      <img 
        src={des01} 
        alt="New Image" 
        className="w-[350px] h-[120px] object-cover" // Adjust size as needed
      />
    </div>

    <div className="signals-grid grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* First Division */}
      <div className="signal-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300 flex items-center">
        <img 
          src={m01} 
          alt="Logo" 
          className="w-12 h-12 rounded-full bg-transparent mr-4"
        />
        <div className="text-left flex-1">
          <h3 className="text-xl font-semibold mb-2">Deep Sleep</h3>
          <p className="text-gray-600">Discover your best sleep <br /> with responsive sleep <br />journeys, overnight sleep <br />tracking, and personalized <br/>insights.</p>
        </div>
      </div>

      {/* Second Division */}
      <div className="signal-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300 flex items-center">
        <img 
          src={m02} 
          alt="Logo" 
          className="w-12 h-12 rounded-full bg-transparent mr-4"
        />
        <div className="text-left flex-1">
          <h3 className="text-xl font-semibold mb-2">Deep Sleep</h3>
          <p className="text-gray-600">Discover your best sleep <br /> with responsive sleep <br />journeys, overnight sleep <br />tracking, and personalized <br/>insights.</p>
        </div>
      </div>

      {/* Third Division */}
      <div className="signal-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300 flex items-center">
        <img 
          src={m03} 
          alt="Logo" 
          className="w-12 h-12 rounded-full bg-transparent mr-4"
        />
        <div className="text-left flex-1">
          <h3 className="text-xl font-semibold mb-2">Relax</h3>
          <p className="text-gray-600">Discover your best sleep <br /> with responsive sleep <br />journeys, overnight sleep <br />tracking, and personalized <br/>insights.</p>
        </div>
      </div>

      {/* Fourth Division */}
      <div className="signal-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300 flex items-center">
        <img 
          src={m1} 
          alt="Logo" 
          className="w-12 h-12 rounded-full bg-transparent mr-4"
        />
        <div className="text-left flex-1">
          <h3 className="text-xl font-semibold mb-2">Calm</h3>
          <p className="text-gray-600">Discover your best sleep <br /> with responsive sleep <br />journeys, overnight sleep <br />tracking, and personalized <br/>insights.</p>
        </div>
      </div>

      {/* Fifth Division */}
      <div className="signal-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300 flex items-center">
        <img 
          src={m2} 
          alt="Logo" 
          className="w-12 h-12 rounded-full bg-transparent mr-4"
        />
        <div className="text-left flex-1">
          <h3 className="text-xl font-semibold mb-2">Focus</h3>
          <p className="text-gray-600">Discover your best sleep <br /> with responsive sleep <br />journeys, overnight sleep <br />tracking, and personalized <br/>insights.</p>
        </div>
      </div>

      {/* Sixth Division */}
      <div className="signal-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300 flex items-center">
        <img 
          src={m3} 
          alt="Logo" 
          className="w-12 h-12 rounded-full bg-transparent mr-4"
        />
        <div className="text-left flex-1">
          <h3 className="text-xl font-semibold mb-2">Happy</h3>
          <p className="text-gray-600">Discover your best sleep <br /> with responsive sleep <br />journeys, overnight sleep <br />tracking, and personalized <br/>insights.</p>
        </div>
      </div>

      {/* Seventh Division */}
      <div className="signal-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300 flex items-center">
        <img 
          src={m4} 
          alt="Logo" 
          className="w-12 h-12 rounded-full bg-transparent mr-4"
        />
        <div className="text-left flex-1">
          <h3 className="text-xl font-semibold mb-2">Alert</h3>
          <p className="text-gray-600">Discover your best sleep <br /> with responsive sleep <br />journeys, overnight sleep <br />tracking, and personalized <br/>insights.</p>
        </div>
      </div>

      {/* Eighth Division */}
      <div className="signal-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300 flex items-center">
        <img 
          src={m5} 
          alt="Logo" 
          className="w-12 h-12 rounded-full bg-transparent mr-4"
        />
        <div className="text-left flex-1">
          <h3 className="text-xl font-semibold mb-2">Heart</h3>
          <p className="text-gray-600">Discover your best sleep <br /> with responsive sleep <br />journeys, overnight sleep <br />tracking, and personalized <br/>insights.</p>
        </div>
      </div>

      {/* Last Division - Image Centered */}
      <div className="signal-item bg-white p-6 flex justify-center items-center">
        <img 
          src={des02} 
          alt="Centered Logo" 
          className="w-[430px] h-[250px] rounded-full bg-transparent"
        />
      </div>

    </div>
  </div>
</section>
          {/* <!-- section below firebee signal --> */}
           

          <section className="what-will-it-do bg-white py-8">
  <div className="container mx-auto flex">
    {/* <!-- Image container with left alignment --> */}
    <div className="flex-shrink-0 w-1/3 pr-8 hover:scale-105 transition-transform duration-300 relative group">
  {/* Replace with your image URL */}
  <img 
    src={mis} 
    alt="Description" 
    className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-80"
  />
</div>

    {/* <!-- Text content container with centered alignment --> */}
    <div className="w-2/3 flex flex-col items-center">
      <div className="text-center mb-8">
        <h2 className="text-6xl font-semibold mb-6 hover:text-blue-500 transition-colors duration-300">What will Firebee do for me?</h2>
        <p className="hover:text-gray-600 transition-colors duration-300">Firebee will help you gently nudge yourself into a different mental state</p>
      </div>
      <ul className="list-disc list-inside text-lg space-y-2">
        <li className="flex items-center justify-start ml-6 hover:text-blue-500 transition-colors duration-300">
          <input 
            type="checkbox" 
            className="w-5 h-5 rounded-md cursor-pointer mr-2 bg-gradient-to-br from-blue-400 to-green-400 border-gray-300 text-white checked:bg-gradient-to-br checked:from-blue-400 checked:to-green-400 focus:ring-0 focus:ring-offset-0 focus:outline-none appearance-none checked:relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-sm checked:after:left-1 checked:after:top-0.5" 
            checked 
          />
          <span className="font-bold">Can't sleep?</span> Turn on the <span className="text-purple-500 font-bold">deep sleep</span> signal
        </li>
        <li className="flex items-center justify-start ml-6 hover:text-blue-500 transition-colors duration-300">
          <input 
            type="checkbox" 
            className="w-5 h-5 rounded-md cursor-pointer mr-2 bg-gradient-to-br from-blue-400 to-green-400 border-gray-300 text-white checked:bg-gradient-to-br checked:from-blue-400 checked:to-green-400 focus:ring-0 focus:ring-offset-0 focus:outline-none appearance-none checked:relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-sm checked:after:left-1 checked:after:top-0.5" 
            checked 
          />
          <span className="font-bold">Feeling tired?</span> Turn on the <span className="text-pink-500 font-bold"> alert </span> signal
        </li>
        <li className="flex items-center justify-start ml-6 hover:text-blue-500 transition-colors duration-300">
          <input 
            type="checkbox" 
            className="w-5 h-5 rounded-md cursor-pointer mr-2 bg-gradient-to-br from-blue-400 to-green-400 border-gray-300 text-white checked:bg-gradient-to-br checked:from-blue-400 checked:to-green-400 focus:ring-0 focus:ring-offset-0 focus:outline-none appearance-none checked:relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-sm checked:after:left-1 checked:after:top-0.5" 
            checked 
          />
          <span className="font-bold">Feeling anxious?</span> Turn on the <span className="text-cyan-500 font-bold"> calm </span> signal
        </li>
        <li className="flex items-center justify-start ml-6 hover:text-blue-500 transition-colors duration-300">
          <input 
            type="checkbox" 
            className="w-5 h-5 rounded-md cursor-pointer mr-2 bg-gradient-to-br from-blue-400 to-green-400 border-gray-300 text-white checked:bg-gradient-to-br checked:from-blue-400 checked:to-green-400 focus:ring-0 focus:ring-offset-0 focus:outline-none appearance-none checked:relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-sm checked:after:left-1 checked:after:top-0.5" 
            checked 
          />
          <span className="font-bold">Feeling unproductive?</span> Turn on the <span className="text-violet-500 font-bold"> focus </span> signal
        </li>
        <li className="flex items-center justify-start ml-6 hover:text-blue-500 transition-colors duration-300">
          <input 
            type="checkbox" 
            className="w-5 h-5 rounded-md cursor-pointer mr-2 bg-gradient-to-br from-blue-400 to-green-400 border-gray-300 text-white checked:bg-gradient-to-br checked:from-blue-400 checked:to-green-400 focus:ring-0 focus:ring-offset-0 focus:outline-none appearance-none checked:relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-sm checked:after:left-1 checked:after:top-0.5" 
            checked 
          />
          <span className="font-bold">Feeling blue?</span> Turn on the <span className="text-green-500 font-bold">happy</span> signal
        </li>
      </ul>
    </div>
  </div>
</section>



            
         


{/* !-- this section below what will firebee do for me  */}


    



<section className="whats-in-the-box py-8">
  <div className="container mx-auto">
    <h2 className="text-2xl font-semibold text-center mb-6 hover:text-blue-600 transition-colors duration-300">What's in the box?</h2>
    
    {/* <!-- Main Image Container --> */}
    <div className="main-image-container flex flex-col items-center mb-8">
      <img 
        src={box}
        alt="Firebee Box Contents" 
        className="w-full md:w-1/2 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      />
    </div>
    
    {/* <!-- Additional Images Container --> */}
    <div className="additional-images-container flex flex-wrap justify-center gap-4">
  <img 
    src={b1} 
    alt="Image 1" 
    className="w-50 h-24 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:animate-slide-left-right" 
  />
</div>

  </div>
</section>



  
        {/* !-- section below what in the box */}
<div className="flex justify-center items-center space-x-8">
  <div className="flex items-center">
    <input 
      type="checkbox" 
      className="w-5 h-5 rounded-md cursor-pointer mr-2 bg-gradient-to-br from-blue-400 to-green-400 border-gray-300 text-white checked:bg-gradient-to-br checked:from-blue-400 checked:to-green-400 focus:ring-0 focus:ring-offset-0 focus:outline-none appearance-none checked:relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-sm checked:after:left-1 checked:after:top-0.5" 
      checked 
    />
    <span className="ml-2 text-gray-500">1 Firebeheadband</span>
  </div>
  <div className="flex items-center">
    <input 
      type="checkbox" 
      className="w-5 h-5 rounded-md cursor-pointer mr-2 bg-gradient-to-br from-blue-400 to-green-400 border-gray-300 text-white checked:bg-gradient-to-br checked:from-blue-400 checked:to-green-400 focus:ring-0 focus:ring-offset-0 focus:outline-none appearance-none checked:relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-sm checked:after:left-1 checked:after:top-0.5" 
      checked 
    />
    <span className="ml-2 text-gray-500">1 Charging cable</span>
  </div>
  <div className="flex items-center">
    <input 
      type="checkbox" 
      className="w-5 h-5 rounded-md cursor-pointer mr-2 bg-gradient-to-br from-blue-400 to-green-400 border-gray-300 text-white checked:bg-gradient-to-br checked:from-blue-400 checked:to-green-400 focus:ring-0 focus:ring-offset-0 focus:outline-none appearance-none checked:relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-sm checked:after:left-1 checked:after:top-0.5" 
      checked 
    />
    <span className="ml-2 text-gray-500">1 User manual</span>
  </div>
</div>
      
    </div>
  )
}

export default ProductOverview
