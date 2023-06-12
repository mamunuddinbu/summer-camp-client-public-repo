import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "I absolutely love the language courses offered by this website. The lessons are well-structured and the instructors are highly knowledgeable. I've made significant progress in my language learning journey.",
      name: "John Doe",
      role: "Student",
    },
    {
      id: 2,
      quote: "The language learning platform provided by this website is top-notch. The interactive exercises and multimedia resources have greatly enhanced my learning experience. Highly recommended!",
      name: "Jane Smith",
      role: "Language Enthusiast",
    },
    {
      id: 3,
      quote: "I have tried multiple language learning platforms, but this one stands out from the rest. The personalized approach and attentive instructors have helped me become fluent in a short period of time.",
      name: "David Johnson",
      role: "Professional Translator",
    },
    {
      id: 4,
      quote: "I have tried multiple language learning platforms, but this one stands out from the rest. The personalized approach and attentive instructors have helped me become fluent in a short period of time.",
      name: "David Johnson",
      role: "Professional Translator",
    },
    {
      id: 5,
      quote: "I have tried multiple language learning platforms, but this one stands out from the rest. The personalized approach and attentive instructors have helped me become fluent in a short period of time.",
      name: "David Johnson",
      role: "Professional Translator",
    },
  ];

  return (
    <section id="testimonials" className="bg-gray-100 py-8 m-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          className="mb-4"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded shadow p-6">
              <p className="text-lg mb-4">{testimonial.quote}</p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
