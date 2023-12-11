// components/Hero.tsx

import React from "react";
import { Image } from "@nextui-org/react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden w-screen h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Engaging &amp;</span>
                <span className="block text-indigo-600 xl:inline">
                  Accessible Online Materials
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Advance your career with our self-paced online courses. Trusted
                by over 10K users worldwide since 2021.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Link
                  href="/courses"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started &rarr;
                </Link>
                <Link
                  href="/about"
                  className="mt-3 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 sm:ml-4"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="p-12 w-full h-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/hero.png" // Replace with your hero image path
          alt="Hero Image"
          width={700}
        />
      </div> */}
    </div>
  );
};

export default Hero;
