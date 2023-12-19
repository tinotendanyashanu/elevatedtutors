import { Avatar, Badge, Button } from "@nextui-org/react";
import React from "react";

function section4() {
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold text-gray-800">
            Explore Our Popular Courses
          </h2>
          <div className="mt-12 grid grid-cols-4 gap-8">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img
                alt="Course Image"
                className="w-full h-48 object-cover"
                height="200"
                src="/next.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Competitive Strategy For All Shades
                </h3>
                <p className="text-gray-600">$450.00</p>
                <div className="flex items-center justify-between mt-4">
                  <Avatar alt="Instructor" src="/next.svg?height=40&width=40" />
                  <Badge>4.5</Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-[#ff9900] text-white">
              View All Courses
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default section4;
