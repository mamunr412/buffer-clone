import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white p-6">
          <div className="flex justify-between items-center mb-8">
            <svg
              width="132"
              height="36"
              viewBox="0 0 132 36"
              aria-hidden="true"
              fill="#000000"
            >
              <path d="M1 9.34 15.17 2l14.322 7.34-14.322 7.366L1 9.34ZM86.068 12.909v-.175c0-2.421 1.425-3.195 3.823-3.02V5.294c-5.746-.35-8.47 2.521-8.47 7.439v.175h-2.598v4.418h3.598v13.38h4.647v-13.38h5.346v13.38h4.647v-13.38h3.823v-4.418h-3.823v-.175c0-2.421 1.4-3.195 3.823-3.02V5.294c-5.746-.35-8.47 2.521-8.47 7.439v.175h-5.346Z"></path>
              <path
                fill-rule="evenodd"
                d="M53.588 17.751c1.474-1.173 2.374-2.845 2.374-4.992 0-4.169-3.398-7.014-7.67-7.014h-9.92v24.912h10.72c4.371 0 7.87-2.946 7.87-7.214-.05-2.571-1.35-4.543-3.374-5.692Zm-5.271-7.388c1.599 0 2.698 1.173 2.698 2.745 0 1.573-1.15 2.746-2.698 2.746h-4.972v-5.491h4.972Zm.75 15.726h-5.722v-5.866h5.721c1.7 0 2.923 1.248 2.923 2.92 0 1.698-1.224 2.946-2.923 2.946Z"
              ></path>
              <path d="M71.451 12.883v9.61c0 3.096-1.698 4.419-3.972 4.419-2.099 0-3.573-1.248-3.573-3.67V12.883H59.26v10.933c0 4.743 2.973 7.364 6.82 7.364 2.424 0 4.298-.898 5.348-2.496v1.997h4.647V12.883H71.45Z"></path>
              <path
                fill-rule="evenodd"
                d="M119.147 23.667h-13.592c.675 2.346 2.623 3.345 5.047 3.345 1.824 0 3.273-.749 4.047-1.773l3.748 2.122c-1.674 2.422-4.372 3.82-7.845 3.82-6.046 0-9.869-4.094-9.869-9.411 0-5.317 3.848-9.41 9.519-9.41 5.322 0 9.119 4.168 9.119 9.41 0 .699-.075 1.298-.174 1.897Zm-8.945-7.14c-2.498 0-4.197 1.324-4.722 3.595h9.194c-.574-2.57-2.523-3.594-4.472-3.594Z"
              ></path>
              <path d="M126.044 15.954v-3.07h-4.648v17.798h4.648V22.17c0-3.745 3.048-4.818 5.471-4.519v-5.117c-2.273 0-4.547.999-5.471 3.42ZM15.17 29.301 5.503 24.06 1 26.493l14.17 7.676 14.322-7.676-4.553-2.434-9.77 5.242Z"></path>
              <path d="m5.503 15.787 9.667 4.754 9.769-4.754 4.553 2.218-14.322 6.973L1 18.005l4.503-2.218Z"></path>
            </svg>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            <a href="#" className="text-gray-600 text-lg">
              Tools
            </a>
            <a href="#" className="text-gray-600 text-lg">
              Channels
            </a>
            <a href="#" className="text-gray-600 text-lg">
              Pricing
            </a>
            <a href="#" className="text-gray-600 text-lg">
              Blog
            </a>
            <a href="#" className="text-gray-600 text-lg">
              Log in
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-center"
            >
              Get started now
            </a>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white shadow-sm pt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <svg
                width="120"
                height="36"
                viewBox="0 0 143 36"
                aria-hidden="true"
                fill="#000000"
              >
                <path d="M1 9.34 15.17 2l14.322 7.34-14.322 7.366L1 9.34ZM86.068 12.909v-.175c0-2.421 1.425-3.195 3.823-3.02V5.294c-5.746-.35-8.47 2.521-8.47 7.439v.175h-2.598v4.418h3.598v13.38h4.647v-13.38h5.346v13.38h4.647v-13.38h3.823v-4.418h-3.823v-.175c0-2.421 1.4-3.195 3.823-3.02V5.294c-5.746-.35-8.47 2.521-8.47 7.439v.175h-5.346Z"></path>
                <path
                  fill-rule="evenodd"
                  d="M53.588 17.751c1.474-1.173 2.374-2.845 2.374-4.992 0-4.169-3.398-7.014-7.67-7.014h-9.92v24.912h10.72c4.371 0 7.87-2.946 7.87-7.214-.05-2.571-1.35-4.543-3.374-5.692Zm-5.271-7.388c1.599 0 2.698 1.173 2.698 2.745 0 1.573-1.15 2.746-2.698 2.746h-4.972v-5.491h4.972Zm.75 15.726h-5.722v-5.866h5.721c1.7 0 2.923 1.248 2.923 2.92 0 1.698-1.224 2.946-2.923 2.946Z"
                ></path>
                <path d="M71.451 12.883v9.61c0 3.096-1.698 4.419-3.972 4.419-2.099 0-3.573-1.248-3.573-3.67V12.883H59.26v10.933c0 4.743 2.973 7.364 6.82 7.364 2.424 0 4.298-.898 5.348-2.496v1.997h4.647V12.883H71.45Z"></path>
                <path
                  fill-rule="evenodd"
                  d="M119.147 23.667h-13.592c.675 2.346 2.623 3.345 5.047 3.345 1.824 0 3.273-.749 4.047-1.773l3.748 2.122c-1.674 2.422-4.372 3.82-7.845 3.82-6.046 0-9.869-4.094-9.869-9.411 0-5.317 3.848-9.41 9.519-9.41 5.322 0 9.119 4.168 9.119 9.41 0 .699-.075 1.298-.174 1.897Zm-8.945-7.14c-2.498 0-4.197 1.324-4.722 3.595h9.194c-.574-2.57-2.523-3.594-4.472-3.594Z"
                ></path>
                <path d="M126.044 15.954v-3.07h-4.648v17.798h4.648V22.17c0-3.745 3.048-4.818 5.471-4.519v-5.117c-2.273 0-4.547.999-5.471 3.42ZM15.17 29.301 5.503 24.06 1 26.493l14.17 7.676 14.322-7.676-4.553-2.434-9.77 5.242Z"></path>
                <path d="m5.503 15.787 9.667 4.754 9.769-4.754 4.553 2.218-14.322 6.973L1 18.005l4.503-2.218Z"></path>
              </svg>
            </div>
            <div className="hidden md:flex ml-8 space-x-6">
              <div className="flex items-center gap-1">
                <a href="#" className="text-black hover:text-blue-900">
                  Tools
                </a>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-1">
                <a href="#" className="text-black hover:text-blue-900">
                  Channels
                </a>{" "}
                <ChevronDown className="w-4 h-4 " />
              </div>
              <a href="#" className="text-black hover:text-blue-900">
                Pricing
              </a>
              <a href="#" className="text-black hover:text-blue-900">
                Blog
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button
                aria-label="Search for blog articles"
                title="Search for blog articles"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  height="20px"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
                  ></path>
                </svg>
              </button>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Log in
              </a>
              <a
                href="#"
                className="bg-[#2c4bff] text-white px-7 py-3 rounded-full hover:opacity-90 text-md"
              >
                Get started now
              </a>
            </div>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
