import Link from "next/link";
import { useState } from "react";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleNav}
        className="fixed top-2 right-4 z-50 text-white rounded-lg shadow-md"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
          >
            <path
              fill="#FFF"
              d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#FFF"
              d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32z"
            />
          </svg>
        )}
      </button>

      <div
        className={`fixed inset-y-0 right-0 w-full md:w-1/3 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-40`}
      >
        <div className="h-24 p-4 border-b">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ff6666"
                d="M252.3 21.12c-6.1 0-31.1 2.84-31.1 9.33c.1 19.44 4.1 33.14 8.9 50.7h-30.8l8 18.42c35.2 1.93 54.5 2.43 90 .1l8-18.52h-31c5.9-16.71 7.6-35.72 8.6-50.89c.4-6.89-24.5-9.14-30.6-9.14m-26.9 97.68c-.9 4.2-1.5 8.8-1.5 13.5c0 12.4 3.8 23.6 9.3 31.1c5.5 7.6 12.3 11.4 19.4 11.4s13.9-3.8 19.4-11.4c5.5-7.5 9.3-18.7 9.3-31.1c0-4.7-.5-9.1-1.5-13.3c-18.2.5-36.3.4-54.4-.2m176.1 2c-4 7.4-5.8 15.7-3 22.1l19.4 29.4c15.6.2 43.3-9.3 45.9-25.6c0-10.7-12.4-16.7-19.8-20.1l-24.3 11.9zm-10.6 43.3c-19.2 13-36.2 20.6-76.6 25.3v.2c1.6 7.4 2.6 15.6 3 24.4c34-10.9 59-21.6 83.3-35.2zm-184.1 17.4c-4.5.5-8.7 1.1-12.8 2.3c6.4 30.4 25.5 63.1 53.3 87.5v-20.7c-27-19-33-43.3-40.5-69.1m18.6 0c6.6 22.7 11 38.5 30.3 52.8c14.3-13.7 17.3-31.6 22.7-51.5c-7.2 6.1-16.1 10-25.8 10c-10.3 0-19.7-4.4-27.2-11.3m69.9 7.8c-5 19.8-9.4 43.2-30 60.8v21.8c8.4-8.1 14.5-14 19.2-19.9c5.9-7.4 10.1-15 14.9-29c-2-11 1-24.1-4.1-33.7m-111.9 22c-3.9 38.6-6.8 72-6.7 98.6c4.7-4.3 10.6-7.3 17.2-8.1c.9-19.6 2.8-39.3 5.5-59.1c-6.5-10.1-11.9-20.7-16-31.4m31.5 52.5c-1.5 13.9-2.6 27.7-3.1 41.4c8.3 4.5 14.5 12.8 16.8 22.6c5-12.5 7.8-25.4 11.6-38.8c-9.2-7.7-17.7-16.1-25.3-25.2m82.8.4c-7.2 8.8-15.7 16.3-27.5 28c4.3 14.9 11.1 28.6 19.6 41.7c5-25 6.5-47.1 7.9-69.7M34.63 295l-2.48 17.8l126.95 17.6c-.4-5.8-.6-11.9-.7-18.2zm162.87 24.6c-7.3 0-14 6.7-14 16.4s6.7 16.4 14 16.4s14-6.7 14-16.4s-6.7-16.4-14-16.4m67.8 8.1v87.2h22v-53.2c-8.1-10.7-15.7-22-22-34m-18 1.6c-4.9 13.4-11.8 27.1-23.6 40.4v45.2h23.6zm-53.9 42.8l.4 34.1c4.3 3.4 8.2 5.6 11.9 7.1v-33.6zm30.3 60.8v37.2c-6.9.7-13.8 1.6-20.8 2.8l-8 18h52.4v-58zm41.6 0v58h69.6l-10-18c-12.5-1.1-25-2.2-37.6-3v-37z"
              />
            </svg>
          </Link>
        </div>
        <ul className="mt-6" onClick={toggleNav}>
          <li>
            <a
              href="#context-section"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Context
            </a>
          </li>
          <li>
            <a
              href="#people-section"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              People
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">
              Workshops
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">
              Products
            </a>
          </li>
        </ul>
        <div className={`fixed bottom-4 left-4 text-white`}>
          <span className="inline-flex">
            <a className="text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
