import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
];

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* Company details */}
          <div className="py-8 px-4 text-center">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Andres D. Jason Car Rentals
            </a>
            <p className="pt-4">
              Reliable and Affordable Car Rentals – Experience the Best Ride
            </p>
            <a
              href="https://github.com/rotiminicol"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-yellow-500 py-2 px-4 mt-5 text-sm rounded-full"
            >
              Send Us a Message
            </a>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-2 md:pl-10 text-center">
            {/* Quick Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:text-yellow-500 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold mb-3">
                Address
              </h1>
              <div>
                <p className="mb-3">Paphos, Cyprus</p>
                <p>+357 ########</p>

                {/* Social links */}
                <div className="flex items-center justify-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-yellow-500 duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-yellow-500 duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-yellow-500 duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Additional Footer Text */}
        <div className="bg-customBlue text-center py-4 text-white">
          <p className="text-sm">
            © 2025 Andres D. Jason Car Rentals. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
