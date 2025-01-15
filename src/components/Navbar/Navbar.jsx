import Logo from "../../assets/car.png";
import { FaCar } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#about",
  },
  {
    id: 3,
    name: "Services",
    link: "/#services",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="bg-white shadow-md fixed top-0 w-full z-50 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-yellow-500 hover:via-blue-500 hover:to-red-500">
        <div className="container py-3">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="font-bold text-xl sm:text-2xl flex justify-center items-center gap-2 tracking-wider font-cursive"
              >
                <img src={Logo} alt="Logo" width={80} height={80} />
              </a>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex justify-between items-center gap-4"
            >
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block text-xl py-2 px-4 text-black duration-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:via-blue-500 hover:to-yellow-500"
                    >
                      <span className="font-semibold tracking-wide">{menu.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#contact">
                <button className="bg-gradient-to-r from-yellow-500 via-blue-500 to-red-500 hover:scale-105 duration-200 text-black px-3 py-1.5 rounded-full flex items-center gap-2">
                  <span className="font-semibold tracking-wide">CONTACT US</span>
                  <FaCar className="text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Added margin to push content down */}
      <div className="mt-16"></div>
    </>
  );
};

export default Navbar;
