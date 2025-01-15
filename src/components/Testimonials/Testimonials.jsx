import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "John Doe",
    text: "The car service was outstanding. The car was immaculate and the ride was incredibly comfortable.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Absolutely the best car service I've used. Punctual, professional, and very affordable. Highly recommended!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Michael Johnson",
    text: "The driver was extremely courteous and the service was top-notch. I felt like a VIP.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Emily Davis",
    text: "Booking a car service was seamless. The whole process was smooth and hassle-free. I will definitely use this service again.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 6,
    name: "Daniel Lee",
    text: "I was impressed with the professionalism and punctuality of the car service. Highly recommended.",
    img: "https://picsum.photos/105/105",
  },
  {
    id: 7,
    name: "Sophia Martinez",
    text: "The best car service I've ever experienced. The driver was friendly, and the car was clean and comfortable.",
    img: "https://picsum.photos/106/106",
  },
  {
    id: 8,
    name: "James Brown",
    text: "Excellent service from start to finish. The car was pristine and the ride was smooth and relaxing.",
    img: "https://picsum.photos/107/107",
  },
  {
    id: 9,
    name: "Olivia Wilson",
    text: "I had a wonderful experience with this car service. The entire process was effortless and the ride was great.",
    img: "https://picsum.photos/108/108",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10 bg-white text-black">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Our Customers Love Us
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-white relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
