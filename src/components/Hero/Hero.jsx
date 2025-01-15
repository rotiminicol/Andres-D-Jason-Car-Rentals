import HeroPng from "../../assets/hero1.png";

const Hero = () => {
  return (
    <>
      <div className="min-h-[550px] sm:min-h-[600px] bg-white flex justify-center items-center text-black shadow-lg rounded-lg">
        <div className="container pb-8 sm:pb-0 shadow-md rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans"
              >
                Andres D Jason Car Rentals
              </h1>
              <p
                data-aos="zoom-out"
                data-aos-delay="400"
                className="text-xl sm:text-2xl lg:text-3xl font-light text-center"
              >
                Best Car Service in Paphos
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2"
            >
              <img
                data-aos-once="true"
                src={HeroPng}
                alt="rental car"
                className="w-full sm:w-[500px] lg:w-[600px] mx-auto animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
