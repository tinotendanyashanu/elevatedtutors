import React from "react";
import Link from "next/link";
import { BookIcon, ClockIcon, SmartphoneIcon, VideoIcon } from "@/config/icons";

function section2() {
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold ">
            Learn New Skills When And Where You Like
          </h2>
          <div className="mt-12 grid grid-cols-4 gap-8">
            <div className="text-center">
              <BookIcon className="mx-auto mb-4 h-12 w-12 bg-[#ff9900]  p-3 rounded-full" />
              <h3 className="text-lg font-semibold ">Expert Instructions</h3>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="text-center">
              <VideoIcon className="mx-auto mb-4 h-12 w-12 bg-[#ff9900] p-3 rounded-full" />
              <h3 className="text-lg font-semibold ">Video Tutorials</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="text-center">
              <ClockIcon className="mx-auto mb-4 h-12 w-12 bg-[#ff9900]  p-3 rounded-full" />
              <h3 className="text-lg font-semibold ">Lifetime Access</h3>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="text-center">
              <SmartphoneIcon className="mx-auto mb-4 h-12 w-12 bg-[#ff9900]  p-3 rounded-full" />
              <h3 className="text-lg font-semibold ">Learn From Anywhere</h3>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default section2;
