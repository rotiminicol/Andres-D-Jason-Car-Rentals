import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const socialLinks = [
   {
     href: 'https://x.com/NicolRotimi',
     icon: <FaTwitter size={24} color="#1DA1F2" />,
     alt: 'Twitter',
   },
   {
     href: 'https://www.instagram.com/rotiminicol/',
     icon: <FaInstagram size={25} color="#E1306C" />,
     alt: 'Instagram',
   },
   {
     href: 'https://facebook.com/rotiminicol',
     icon: <FaFacebook size={24} color="#1877F2" />,
     alt: 'Facebook',
   },
 ];
 

   const Contact = () => {
      return (
      <section
         id="contact"
         className="section mb-16"
      >
         <div className="container lg:grid lg:grid-cols-2 lg:items-stretch shadow-lg p-10 hover:shadow-2xl transition-shadow duration-300">
         <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch] text-black reveal-up">
            Contact me for collaboration
          </h2>

          <p className="mt-3 mb-8 max-w-[50ch] text-black lg:max-w-[30ch] reveal-up">
            Reach out today to discuss your project needs and start collaborating on something amazing!
          </p>

          <div className="flex items-center gap-2 mt-auto">
            {socialLinks.map(({ href, icon }, key) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-black rounded-lg transition-[background-color,color] hover:bg-white hover:text-black active:bg-white/80 reveal-up"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
   
            <form
            action="https://getform.io/f/byvvzopa"
            method="POST"
            className="xl:pl-10 2xl:pl-20"
            >
            <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
               <div className="mb-4">
                  <label
                  htmlFor="name"
                  className="label text-black"
                  >
                  Name
                  </label>
   
                  <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  placeholder="My Name"
                  className="text-field text-black p-3"
                  />
               </div>
   
               <div className="mb-4">
                  <label
                  htmlFor="email"
                  className="label text-black"
                  >
                  Email
                  </label>
   
                  <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  placeholder="@example.com"
                  className="text-field text-black p-3"
                  />
               </div>
   
            </div>
   
            <div className="mb-4">
               <label
                  htmlFor="message"
                  className="label text-black"
               >
                  Message
               </label>
   
               <textarea
                  name="message"
                  id="message"
                  placeholder="Hi!"
                  required
                  className="text-field resize-y min-h-32 max-h-80 text-black p-3"
               >
               </textarea>
            </div>
   
            <button
               type="submit"
               className="btn btn-primary w-full justify-center bg-gradient-to-r from-yellow-500 via-blue-500 to-red-500 text-black font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:bg-yellow-700 hover:ring-2 hover:ring-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-700"
            >
               Send Us a Message
            </button>
            </form>
         </div>
      </section>
      )
   }
   
   export default Contact;
      