function Navbar() {
  return (
    <nav className="flex fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-xl h-17.5 items-center justify-center z-20 border-2 border-gray-200 backdrop-blur-md text-black shadow-[0px_4px_25px_0px_#0000000D] rounded-full transition-all max-[599px]:hidden">
      <ul className="flex items-center gap-10">
        <li>
          <a className="hover:text-gray-300 transition" href="#Home">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-gray-300 transition" href="#About">
            About
          </a>
        </li>
        <li>
          <a className="hover:text-gray-300 transition" href="#Services">
            Services
          </a>
        </li>
        <li>
          <a className="hover:text-gray-300 transition" href="#Contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
