import { Avatar } from "@nextui-org/react";
import React from "react";

function section6() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-800">
          Our Students Feedback
        </h2>
        <div className="mt-12 grid grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-600">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <div className="flex items-center mt-4">
              <Avatar
                alt="Student"
                className="mr-4"
                src="/placeholder.svg?height=40&width=40"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  John Smith
                </h3>
                <p className="text-gray-600">Marketing Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default section6;
