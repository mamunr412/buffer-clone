import { metrics } from "../../constantData";
import bangerImage from "../../assets/hero-2.webp";
import { Play } from "lucide-react";

const BannerSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className=" text-center lg:text-left w-3xl ">
            <div className="mb-6">
              <button className="inline-flex items-center gap-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-full text-sm hover:bg-blue-100 transition-colors">
                <Play size={16} /> Watch Demo Video
              </button>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black pb-5">
              Grow your audience on social and beyond
            </h1>

            <p className=" mb-8 text-sm md:text-base text-black">
              Buffer helps you build an audience organically. We're a
              values-driven company that provides affordable, intuitive
              marketing tools for ambitious people and teams.
            </p>

            <div className="w-[500px]">
              {" "}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full px-6 py-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap">
                  Get started now
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Try for free
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Cancel anytime
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <img
              src={bangerImage}
              alt="Dashboard Preview"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-2xl p-6 space-y-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-semibold text-gray-600">
                  {metric.value}
                </span>
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-sm text-left">{metric.label}</p>
            </div>

            <div className="flex items-center gap-2  ">
              <div className="relative">
                <img
                  src={
                    "https://media.istockphoto.com/id/1125341207/vector/male-user-avatar-vector-icon.jpg?s=612x612&w=is&k=20&c=PjKE8WqDtNBWvme6SJxWAAx257f-PFiit06sdmorX1U="
                  }
                  alt={metric.username}
                  className="w-8 h-8 rounded-full "
                />

                {metric.platform === "linkedin" && (
                  <svg
                    className="w-4 h-4 text-blue-600 absolute bottom-0 right-[-10px] "
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#0078d4"
                      d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                    ></path>
                    <path
                      d="M30,35v-9c0-1.103-0.897-2-2-2s-2,0.897-2,2v9h-6V18h6v1.027C27.04,18.359,28.252,18,29.5,18	c3.584,0,6.5,2.916,6.5,6.5V35H30z M13,35V18h2.966C14.247,18,13,16.738,13,14.999C13,13.261,14.267,12,16.011,12	c1.696,0,2.953,1.252,2.989,2.979C19,16.733,17.733,18,15.988,18H19v17H13z"
                      opacity=".05"
                    ></path>
                    <path
                      d="M30.5,34.5V26c0-1.378-1.121-2.5-2.5-2.5s-2.5,1.122-2.5,2.5v8.5h-5v-16h5v1.534	c1.09-0.977,2.512-1.534,4-1.534c3.309,0,6,2.691,6,6v10H30.5z M13.5,34.5v-16h5v16H13.5z M15.966,17.5	c-1.429,0-2.466-1.052-2.466-2.501c0-1.448,1.056-2.499,2.511-2.499c1.436,0,2.459,1.023,2.489,2.489	c0,1.459-1.057,2.511-2.512,2.511H15.966z"
                      opacity=".07"
                    ></path>
                    <path
                      fill="#fff"
                      d="M14,19h4v15h-4V19z M15.988,17h-0.022C14.772,17,14,16.11,14,14.999C14,13.864,14.796,13,16.011,13	c1.217,0,1.966,0.864,1.989,1.999C18,16.11,17.228,17,15.988,17z M35,24.5c0-3.038-2.462-5.5-5.5-5.5	c-1.862,0-3.505,0.928-4.5,2.344V19h-4v15h4v-8c0-1.657,1.343-3,3-3s3,1.343,3,3v8h4C35,34,35,24.921,35,24.5z"
                    ></path>
                  </svg>
                )}
                {metric.platform === "twitter" && (
                  <svg
                    className="w-4 h-4 text-blue-600 absolute bottom-0 right-[-10px] "
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#03a9f4"
                      d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3 c-0.951,0.559-2.671,1.156-3.793,1.372C31.311,15.422,30.033,15,28.617,15C25.897,15,24,17.305,24,20v2c-4,0-7.9-3.047-10.327-6 c-0.427,0.721-0.667,1.565-0.667,2.457c0,1.819,1.671,3.665,2.994,4.543c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057 c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27c0.626,1.935,3.773,2.958,5.928,3c-1.686,1.307-4.692,2-7,2 c-0.399,0-0.615,0.022-1-0.023C14.178,33.357,17.22,34,20,34c9.057,0,14-6.918,14-13.37c0-0.212-0.007-0.922-0.018-1.13 C34.95,18.818,35.342,18.104,36,17.12"
                    ></path>
                  </svg>
                )}
                {/* {metric.platform === "twitter" && (
                  <svg
                    className="w-4 h-4 text-blue-400  top-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                  </svg>
                )} */}
              </div>
              <div className="pl-4">
                <span className="text-gray-700 text-sm">{metric.username}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 text-center mt-10">
        <h1 className="text-4xl font-bold mb-6 text-black">
          Build a following without draining your time
        </h1>
        <p className="text-black text-lg max-w-2xl mx-auto">
          Creating content is hard enough. Let alone distributing it to all the
          different marketing channels. Here are four ways Buffer can help.
        </p>
      </div>
    </div>
  );
};

export default BannerSection;
