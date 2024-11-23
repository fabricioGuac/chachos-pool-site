
import { Link, useLocation } from 'react-router-dom';

export default function Nav({isOpen, setIsOpen}){
  // Gets the path of the current location
  const currentPg = useLocation().pathname;


  // Function to close the side menu only if it's open when one of the links is clicked
  const handleClick = () => {
    if (isOpen) {
        setIsOpen(false);
    }
}

  // Array containing the information for the pages
  const pages = [
    {path: '/', label: 'Home' },
    {path: '/about', label: 'About us' },
    {path: '/services', label: 'Services' },
    {path: '/testimonials', label: 'Testimonials' },
    {path: '/contact', label: 'Contact' },
  ];


  return (
    <nav className={`
    absolute lg:static top-full left-0 w-full lg:w-auto bg-blue-900
    transition-all duration-500 transform ${
      isOpen ? "translate-y-0 opacity-100 pointer-events-auto z-50" : "-translate-y-full opacity-0 pointer-events-none" 
    }
    lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto
    `}>
      
        <ul className='flex flex-col lg:flex-row text-center lg:space-x-4 p-4 lg:p-0'>

          {pages.map((link) => (

            <li key={link.path}>

              <Link
                to={link.path}
                onClick={handleClick}
                className={` px-4 py-2 block ${currentPg === link.path ? "bg-blue-700" : "hover:bg-blue-800"}`}
              >
                {link.label}
              </Link>

            </li>

          ))}

        </ul>

    </nav>
  )
}