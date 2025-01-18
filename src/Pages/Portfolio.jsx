import React from "react";
import { Link, Route, Routes } from "react-router-dom"; // Import React Router components
import logo from "../assets/dhanapati-logo.png";
import { useState } from "react";
import { X, Menu, Search, ChevronDown } from "lucide-react";



const Portfolio = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const [searchQuery, setSearchQuery] = useState('')

  const portfolioCompanies = [
    {
      name: 'facebook',
      description: 'Facebook operates as a social networking Website. It enables members to look up friend\'s Web pages, as well as share photos and...',
      status: 'IPO: FB',
      bgImage: 'https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?auto=format&fit=crop&q=80',
      bgColor: 'from-orange-500/90 to-orange-500/90'
    },
    {
      name: 'GitHub',
      description: 'GitHub helps people build better software, together. Its powerful collaboration, review and code management for open source and...',
      status: 'Acquired By: Microsoft',
      bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
      bgColor: 'from-indigo-900/80 to-indigo-900/80'
    },
    {
      name: 'instacart',
      description: 'Instacart works with grocers and retailers to transform how people shop. The platform offers retailers a suite of enterprise-grade technology...',
      status: 'IPO: CART',
      bgImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80',
      bgColor: 'from-green-700/80 to-green-700/80'
    }
  ]

  const companies = [
    { name: 'Accolade', status: 'IPO: ACCD' },
    { name: 'Actifio', status: 'ACQUIRED BY: GOOGLE' },
    { name: 'Affirm', status: 'IPO: AFRM' },
    { name: 'Airbnb', status: 'IPO: ABNB' },
    { name: 'Allset', status: 'ACQUIRED BY: SOUNDHOUND' },
    { name: 'Amiato', status: 'ACQUIRED BY: AMAZON.COM' },
    { name: 'Apptio', status: 'IPO: APTI' },
    { name: 'Arimo', status: 'ACQUIRED BY: PANASONIC CORPORATION' },
    { name: 'Asana', status: 'DPO: ASAN' },
    { name: 'Asserts', status: 'ACQUIRED BY: GRAFANA LABS' }
  ]


  return (
    <div>


      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 px-6 py-4 flex items-center justify-between border-b">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Subh IT Company Logo" className="h-12 w-auto" />
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Menu className="w-5 h-5" />
          </button>



        
        </div>
      </nav>

      {/* nav sliding */ }
              {/* Sliding menu */}
                    <div
                      className={`fixed top-0 right-0 w-[400px] h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                      }`}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-8">
                          <Link to="/" className="flex items-center">
                            <img src={logo} alt="Subh IT Company Logo" className="h-12 w-auto" />
                          </Link>
                          <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-full"
                          >
                            <X className="w-5 h-5 text-gray-600" />
                          </button>
                        </div>
              
                        <div className="space-y-12">
                          <div>
                            <h3 className="text-orange-500 font-medium mb-4">ABOUT US</h3>
                            <ul className="space-y-4">
                              <li>
                                {" "}
                                <Link
                                  to="/portfolio"
                                  className="text-gray-600 hover:text-gray-900"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  Portfolio
                                </Link>
                              </li>
              
                              <li>
                                <Link
                                  to="/team"
                                  className="text-gray-600 hover:text-gray-900"
                                >
                                  Team
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/about"
                                  className="text-gray-600 hover:text-gray-900"
                                >
                                  About
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/jobs"
                                  className="text-gray-600 hover:text-gray-900"
                                >
                                  Jobs
                                </Link>
                              </li>
                            </ul>
                          </div>
              
                          <div>
                            <h3 className="text-orange-500 font-medium mb-4">FOLLOW A16Z</h3>
                            <div className="flex gap-4">
                              <a
                                href="#"
                                className="p-2 bg-[#1DA1F2] rounded text-white hover:opacity-90"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="p-2 bg-[#0A66C2] rounded text-white hover:opacity-90"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="p-2 bg-[#1877F2] rounded text-white hover:opacity-90"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="p-2 bg-[#E4405F] rounded text-white hover:opacity-90"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="p-2 bg-[#FF0000] rounded text-white hover:opacity-90"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


      <section className="m-20 py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-700 mb-12">Portfolio We've Backed</h2>
        
        <div className="flex flex-wrap gap-4 mb-8">
          {/* Filter Dropdowns */}
          <div className="relative">
            <button className="px-4 py-2 border rounded-md bg-white text-gray-700 flex items-center gap-2 hover:border-gray-400">
              Search By Industry
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          
          
          {/* Portfolio Jobs Board Button */}
          <button className="px-6 py-2 bg-[#00c1ff] text-white rounded-md hover:bg-[#00b0e6] transition-colors">
            PORTFOLIO JOBS BOARD
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioCompanies.map((company) => (
            <div key={company.name} className="group relative overflow-hidden rounded-lg shadow-lg h-[300px]">
              <div 
                className={`w-full h-full ${company.bgColor || ''}`}
                style={company.bgImage ? {
                  backgroundImage: `url(${company.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                } : {}}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-between">
                  {/* <img
                    src={company.logo}
                    alt={company.name}
                    className="h-8 object-contain filter brightness-0 invert"
                  /> */}
                  <div>
                    <p className="text-white mb-4 text-lg">
                      {company.description}
                    </p>
                    <p className="text-white/80 text-sm">
                      {company.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


 {/* Portfolio Grid Section */}
 <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0">
            {companies.map((company, index) => (
              <div key={index} className="border border-gray-200 p-8 flex flex-col items-center justify-between">
                <div className="h-20 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-gray-800">{company.name}</h3>
                </div>
                <div className="w-full bg-gray-700 mt-4">
                  <p className="text-white text-center text-sm py-2 px-4">
                    {company.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      
    </div>
  );
};

export default Portfolio;
