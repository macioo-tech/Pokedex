const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8) backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Poke<span className="text-blue-500">Dex</span>
          </a>
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
            &#9776;
          </div>
          <div className="hidden md:flex item-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors"> Ulubione </a>
            <a href="#home" className="text-gray-300 hover:text-white transition-colors"> Arena </a>
            <a href="#home" className="text-gray-300 hover:text-white transition-colors"> Ranking </a>
            <a href="#home" className="text-gray-300 hover:text-white transition-colors"> Edycja </a>
            <a href="#home" className="text-gray-300 hover:text-white transition-colors"> Wyloguj </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
