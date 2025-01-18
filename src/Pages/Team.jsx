import React from "react";
import { Link, Route, Routes } from "react-router-dom"; // Import React Router components
import logo from "../assets/dhanapati-logo.png";
import { useState } from "react";
import { X, Menu, Search, ChevronDown } from "lucide-react";

const Team = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const teamMembers = [
        {
          name: 'Subham ',
          role: 'Frontend',
          image: 'https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=612x612&w=0&k=20&c=hMJhVHKeTIznZgOKhtlPQEdZqb0lJ5Nekz1A9f8sPV8=',
          twitter: '#',
          linkedin: '#'
        },
        {
          name: 'Aaron Schnider',
          role: 'Operations',
          image: 'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=',
          twitter: '#',
          linkedin: '#'
        },
        {
          name: 'Abisekh Sharma',
          role: 'Product Manager',
          image: 'https://thumbs.dreamstime.com/b/profile-picture-smiling-caucasian-male-employee-close-up-young-businessman-show-leadership-qualities-headshot-portrait-happy-204044575.jpg',
          twitter: '#',
          linkedin: '#'
        },
        {
          name: 'Abigail Faber',
          role: 'Backend',
          image: 'https://media.istockphoto.com/id/1409155424/photo/head-shot-portrait-of-millennial-handsome-30s-man.jpg?s=612x612&w=0&k=20&c=b4JsxbguyjjrHh6ceRCrclnAPioqXwAsbVBh1rsNuDg=',
          linkedin: '#'
        }
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
    {/*end of Navigation Menu */}

            {/* Sliding menu */}
                  <div
                    className={`fixed top-0 right-0 w-[400px] h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
                      isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-8">
                        <Link to="/" className="flex items-center">
                          <img src={logo} alt="Subh IT Company Logo" className="h-10 w-auto" />
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
                          <h3 className="text-orange-500 font-medium mb-4">FOLLOW Subh IT Company</h3>
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

          {/* Team Section */}
          <main className="pt-24 px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-700 mb-8">
            The Power of Our Network
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 max-w-4xl">
            Our team of experts is committed to helping our portfolio companies grow their businesses. We are at the forefront of new technology, helping founders and their companies impact and change the world.
          </p>
          
          <a href="/jobs" className="text-[#00c1ff] hover:underline text-xl mb-16 inline-block">
            Click here
            <span className="text-gray-600"> for a list of current job openings.</span>
          </a>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="relative group">
                <div className="relative overflow-hidden rounded-lg bg-orange-500">
                  {/* Background Pattern */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0c50 0 50 100 100 100V0H0z\' fill=\'%23000\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
                      backgroundSize: '50px 50px'
                    }}
                  />
                  
                  {/* Social Links */}
                  <div className="absolute top-2 right-2 flex gap-2">
                    {member.twitter && (
                      <a 
                        href={member.twitter}
                        className="p-2 bg-gray-700 rounded text-white hover:bg-gray-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    )}
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        className="p-2 bg-gray-700 rounded text-white hover:bg-gray-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                  
                  {/* Team Member Image */}
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full aspect-square object-cover grayscale"
                  />
                </div>
                
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>


    </div>
  );
};

export default Team;
