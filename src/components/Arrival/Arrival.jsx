import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";
import Img4 from "../../assets/img4.png";
import Img5 from "../../assets/img5.png";
import Img6 from "../../assets/img6.png";
import Img7 from "../../assets/img7.png";
import Img8 from "../../assets/img8.png";
import Img9 from "../../assets/img9.png";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    price: "$20/day",
    description: "A reliable and fuel-efficient compact sedan for your daily commute.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    brand: "Honda",
    model: "Civic",
    year: 2023,
    price: "$22/day",
    description: "A sporty and stylish sedan for a smooth and enjoyable ride.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img3,
    brand: "Ford",
    model: "Mustang",
    year: 2021,
    price: "$35/day",
    description: "An iconic sports car offering thrilling performance for special occasions.",
    aosDelay: "500",
  },
  {
    id: 4,
    img: Img4,
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    price: "$40/day",
    description: "An electric car that combines efficiency and cutting-edge technology for a green drive.",
    aosDelay: "100",
  },
  {
    id: 5,
    img: Img5,
    brand: "Chevrolet",
    model: "Camaro",
    year: 2020,
    price: "$30/day",
    description: "A high-performance sports car with a muscular design for an adrenaline rush.",
    aosDelay: "300",
  },
  {
    id: 6,
    img: Img6,
    brand: "BMW",
    model: "3 Series",
    year: 2022,
    price: "$45/day",
    description: "A luxury sedan offering a perfect blend of comfort and performance for a premium experience.",
    aosDelay: "500",
  },
  {
    id: 7,
    img: Img7,
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    price: "$50/day",
    description: "A premium sedan with luxurious interiors for an elegant drive.",
    aosDelay: "100",
  },
  {
    id: 8,
    img: Img8,
    brand: "Audi",
    model: "A4",
    year: 2022,
    price: "$43/day",
    description: "A sophisticated luxury sedan with cutting-edge technology for a smooth journey.",
    aosDelay: "300",
  },
  {
    id: 9,
    img: Img9,
    brand: "Jeep",
    model: "Wrangler",
    year: 2021,
    price: "$35/day",
    description: "A rugged SUV built for off-road adventures and unmatched durability.",
    aosDelay: "500",
  },
];

const Arrival = () => {
  return (
    <>
      <span id="services"></span>
      <div className="mt-10 py-10" style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
        <div className="container mx-auto px-6 lg:px-20">
          {/* Heading section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold font-serif text-gray-800">
              Latest Additions
            </h1>
            <p className="text-lg text-gray-600 mt-4 font-sans">
              Discover our latest fleet of cars ready for rent. Drive in style and comfort.
            </p>
          </div>

          {/* Services Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-xl bg-white hover:bg-gray-800 hover:text-white shadow-lg transform hover:-translate-y-2 duration-300 group w-full max-w-[400px] overflow-hidden font-mono"
              >
                {/* Image Section */}
                <div className="relative h-[200px] lg:h-[250px] overflow-hidden bg-gray-100">
                  <img
                    src={service.img}
                    alt={service.model}
                    className="w-full h-full object-cover transform group-hover:scale-105 duration-300"
                  />
                </div>

                {/* Description Section */}
                <div className="p-6 text-center space-y-3">
                  <h1 className="text-2xl font-bold mb-2">{`${service.brand} ${service.model}`}</h1>
                  <div className="text-gray-600 group-hover:text-gray-200 text-sm">
                    <p className="font-medium">Year: {service.year}</p>
                    <p className="font-medium">Price: {service.price}</p>
                  </div>
                  <p className="text-gray-500 group-hover:text-gray-300 text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Call to Action */}
                <div className="bg-gray-800 text-white p-4 mt-2 text-center">
                  <button className="bg-gradient-to-r from-yellow-500 via-blue-500 to-red-500 hover:scale-105 duration-200 text-white py-2 px-5 rounded-lg font-medium shadow-md">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Arrival;
