import { Button } from "@nextui-org/react";
import React from "react";

function section7() {
  return (
    <div>
      {" "}
      <section className="py-16 ">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold text-gray-800">
            Our Latest News Feed
          </h2>
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img
                alt="Blog Image"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Introduction To JavaScript for the Beginners
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-[#ff9900] text-white">Read More Blogs</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default section7;
