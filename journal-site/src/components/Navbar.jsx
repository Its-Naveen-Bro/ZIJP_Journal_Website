import { Link } from 'react-router-dom';
import { User, ShoppingCart, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  
  const menu = {
    research: [
   
      { name: "Submit Research Paper", link: "/submit-research" }, 
      { name: "Research Paper Guidelines", link: "/research-guidelines" },
      { name: "Publication charges", link: "/publication-charges" },
      { name: "Upload Documents", link: "/upload-documents" }
    ],
    archive: [
      { name: "2026 Issues", link: "/2026-issues" },
      { name: "2025 Issues", link: "/2025-issues" },
      { name: "2024 Issues", link: "/2024-issues" }
    ],
    issue: [
      { name: "Volume 10, Issue 1", link: "/volume-10-issue-1" }
    ]
  };

  return (
    <header className="section1">
      <div className="section8">
        
        <Link to="/" className="section9" style={{ textDecoration: 'none', color: 'inherit' }}>
  <div className="icon1">Z</div> 
  <span> ZIJP Online</span>
</Link>
        
        <nav className="section10">
          
          <div 
            className="relative"
            onMouseEnter={() => setOpenMenu("research")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="button4">Research Paper <ChevronDown size={16}/></button>
            {openMenu === "research" && (
              <div className="dropdown-menu">
                {menu.research.map((item) => (
                  <Link key={item.name} to={item.link} className="dropdown-item">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div 
            className="relative"
            onMouseEnter={() => setOpenMenu("archive")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="button4">Archive <ChevronDown size={16}/></button>
            {openMenu === "archive" && (
              <div className="dropdown-menu">
                {menu.archive.map((item) => (
                  <Link key={item.name} to={item.link} className="dropdown-item">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div 
            className="relative"
            onMouseEnter={() => setOpenMenu("issue")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="button4">Current Issue <ChevronDown size={16}/></button>
            {openMenu === "issue" && (
              <div className="dropdown-menu">
                {menu.issue.map((item) => (
                  <Link key={item.name} to={item.link} className="dropdown-item">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

        </nav>

        {/* Right Side Icons */}
        <div className="section11">
          <User size={20} />
          <div>
            <Link to="/login" className="text8">Login</Link>
            <span> | </span>
            <Link to="/register" className="text8">Create Account</Link>
          </div>
          <ShoppingCart size={20} />
        </div>
        
      </div>
    </header>
  );
}