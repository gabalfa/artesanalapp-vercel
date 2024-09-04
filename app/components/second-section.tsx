import React from "react";
import Image from "next/image";

function second() {
  return (
    <section
      id="people-section"
      className="text-gray-600 body-font m-4 pb-16 mb-16"
    >
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 my-20">
        People
      </h1>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="overflow-hidden">
            <Image
              height={900}
              width={900}
              alt="hero"
              src="/third-section-1.webp"
            />
          </div>
          <h2 className="capitalize text-xl font-medium title-font text-gray-900 mt-5">
            Tempora voluptatem iste at!
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            dolorem quos ipsa eum possimus minima quia hic, recusandae
            consequatur blanditiis tempora aspernatur quis nobis! Quam fugiat
            soluta tempore ipsa numquam.
          </p>
          <a className="capitalize text-indigo-500 inline-flex items-center mt-3">
            See more
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="overflow-hidden">
            <Image
              height={900}
              width={900}
              alt="hero"
              src="/third-section-2.webp"
            />
          </div>
          <h2 className="capitalize text-xl font-medium title-font text-gray-900 mt-5">
            saepe repellat
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            obcaecati laboriosam cum, consequuntur amet molestias totam atque
            sed neque libero maiores assumenda eligendi praesentium maxime autem
            earum ut.
          </p>
          <a className="text-indigo-500 inline-flex items-center mt-3">
            See more
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className=" overflow-hidden">
            <Image
              height={900}
              width={900}
              alt="hero"
              src="/third-section-3.webp"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
            Excepturi facere
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            repellendus, asperiores voluptate, quia commodi soluta fugiat natus
            esse, suscipit. Ab beatae nisi ea dolor harum sed distinctio rem.
          </p>
          <a className="text-indigo-500 inline-flex items-center mt-3">
            See more
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default second;
