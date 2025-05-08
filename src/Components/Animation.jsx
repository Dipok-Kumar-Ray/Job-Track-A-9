import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Animation = () => {
  const slides = [
    {
      id: 1,
      title: "Tech & Gadgets Box",
      image: "https://i.ibb.co.com/gcxJr9P/developer.jpg",
      description: "Monthly curated gadgets and smart devices just for you.",
    },
    {
      id: 2,
      title: "Skincare Essentials Box",
      image: "https://i.ibb.co.com/RTKNv53Q/images4.jpg",
      description: "Handpicked books just for you.",
    },
    {
      id: 3,
      title: "Fitness & Wellness Box",
      image: "https://i.ibb.co.com/Pv0dV3mG/images8.jpg",
      description: "Supplements, accessories, and fitness guides.",
    },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto py-8 px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="rounded-xl shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-[300px] md:h-[500px] bg-cover bg-center rounded-xl overflow-hidden"
              style={{ backgroundImage: url(${slide.image}) }}
            >
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-center p-4">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-sm md:text-lg">{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Animation;