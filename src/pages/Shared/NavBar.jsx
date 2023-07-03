import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <Link className='p-2 text-purple-500 text-xl' to='/'><a>Home</a></Link>
            <Link className='p-2 text-purple-500 text-xl' to='/about' ><a>About</a></Link>
            <Link className='p-2 text-purple-500 text-xl' to='/skills'  ><a>Skills</a></Link>
            <Link className='p-2 text-purple-500 text-xl' to='/projects'><a>Projects</a></Link>
            
            <Link className='p-2 text-purple-500 text-xl' to='/contact'><a>Contact</a></Link>
          </ul>
        </div> 
        <a className=" normal-case text-xl"><span className="text-purple-600 text-3xl bold">S</span>hohidul <span className="text-purple-600 text-3xl bold">A</span>rifin</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            <Link className='p-2 text-purple-500 text-xl' to='/'><a>Home</a></Link>
            <Link className='p-2 text-purple-500 text-xl' to='/about' ><a>About</a></Link>
            <Link className='p-2 text-purple-500 text-xl' to='/skills'  ><a>Skills</a></Link>
            <Link className='p-2 text-purple-500 text-xl' to='/projects'><a>Projects</a></Link>
            
            <Link className='p-2 text-purple-500 text-xl' to='/contact'><a>Contact</a></Link>
        </ul>
      </div>
      
    </div>
  );
};

export default NavBar;