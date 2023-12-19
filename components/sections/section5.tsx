import { Avatar } from "@nextui-org/react";
import React from "react";

function section5() {
  return (
    <div>
      <section className="py-16 ">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold text-gray-800">
            Introduce Our Life Coaches
          </h2>
          <div className="mt-12 grid grid-cols-4 gap-8">
            <div className="text-center">
              <Avatar
                alt="Life Coach"
                className="mx-auto mb-4"
                src="/placeholder.svg?height=100&width=100"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                James Carlson
              </h3>
              <p className="text-gray-600">SEO Expert</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default section5;
