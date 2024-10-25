import { features, stats, testimonials } from "../../constantData";
import { ArrowRight } from "lucide-react";
import teamImg from "../../assets/team-map.webp";
const CardsSection = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {features.map((feature, index) => (
          <div key={index} className="mb-24 last:mb-0">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="text-lg font-bold text-blue-600 mb-3 pb-3">
                  {feature.number}. {feature.title}
                </div>
                <h2 className="text-3xl font-bold mb-4  text-black">
                  {feature.heading}
                </h2>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  {feature.buttonText}
                  <ArrowRight size={20} />
                </button>
              </div>
              <div
                className={index % 2 === 0 ? "order-2" : "order-2 md:order-1"}
              >
                <img
                  src={feature.image}
                  alt={feature.heading}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 ">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg  shadow-3xl p-8 max-w-sm"
              >
                <div className="flex flex-col items-center text-center relative">
                  {/* Avatar */}
                  <div className="mb-6 absolute top-[-90px]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full"
                    />
                  </div>

                  {/* Quote */}
                  <p className="text-gray-800 mb-6 text-lg">
                    {testimonial.quote}
                  </p>

                  {/* Company */}
                  <div className="text-gray-400 mb-4">
                    {testimonial.company}
                  </div>

                  {/* Name and Role */}
                  <div className="text-gray-800 font-medium">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Left content */}
          <div className="max-w-md text-left">
            <h2 className="text-3xl font-bold mb-6 text-black">
              And we are here to help
            </h2>
            <p className=" mb-8 leading-relaxed text-black">
              Our customer advocates are standing by 24/7 to support you via
              email and social media. We also have a comprehensive, regularly
              updated help center for those who prefer to find help themselves.
            </p>
            <a
              href="#"
              className="inline-flex px-6 py-2 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors"
            >
              Visit our help center
            </a>
          </div>

          {/* Right content - Avatar network */}
          <div>
            <img src={teamImg} alt="" />

            {/* Connecting lines using border-dashed */}
            <div className="absolute inset-0">
              <div className="w-full h-full border border-dashed border-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-[#2c4bff] text-white py-12 sm:py-16 relative h-[400px]">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 ">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 pt-10">
            140,000+ people like you use Buffer to build their brand on social
            media every month
          </h2>

          <button className=" bg-[#e97284] text-white-600 sm:px-8 py-5 rounded-full font-semibold tex-md ">
            Get started now
          </button>

          <div className="bg-[url(https://buffer.com/static/background/triangle-green.svg)] bg-cover h-[40px] w-[40px]  absolute top-12 left-36 bg-no-repeat"></div>
          <div className="bg-[url('https://buffer.com/static/background/planet@2x.png')] bg-cover h-[180px] w-[180px]  absolute left-[-60px] top-28"></div>
          <div className="bg-[url('https://buffer.com/static/background/circle-pink.svg')] bg-cover h-[60px] w-[60px]  absolute left-28 bottom-[-10px] "></div>
        </div>
      </section>
    </div>
  );
};

export default CardsSection;
