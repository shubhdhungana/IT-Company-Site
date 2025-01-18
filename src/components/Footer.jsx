import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full">
      {/* Full-width footer */}
      <div className="w-full px-6">
        {/* Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          {/* Logo and Copyright */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold leading-tight">Dhanapati<br /></h1>
            <p className="mt-2 text-gray-400">© 2025 Dhanapati</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 text-xl">
            <a href="#" className="hover:underline text-gray-300">Terms of Use</a>
            <a href="#" className="hover:underline text-gray-300">Conduct</a>
            <a href="#" className="hover:underline text-gray-300">Privacy Policy</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#" className=" hover:bg-gray-600 p-2 ">
              <span className="sr-only">Twitter</span> X
            </a>
            <a href="#" className=" hover:bg-gray-600 p-2">
              <span className="sr-only">LinkedIn</span> in
            </a>
            <a href="#" className=" hover:bg-gray-600 p-2 ">
              <span className="sr-only">Facebook</span> f
            </a>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
