import { UsersIcon, StarIcon, ThumbsUpIcon } from "@/config/icons";
import { Avatar, Badge, Button } from "@nextui-org/react";
import React from "react";

function Section3() {
  return (
    <div>
      <section className="bg-[#ff9900] py-16 ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <UsersIcon className="h-16 w-16 mr-4" />
            <div>
              <h3 className="text-4xl font-bold">2.98</h3>
              <p>People Enrolled</p>
            </div>
          </div>
          <div className="flex items-center">
            <StarIcon className="h-16 w-16 mr-4" />
            <div>
              <h3 className="text-4xl font-bold">90%</h3>
              <p>People Love To Learn With Us</p>
            </div>
          </div>
          <div className="flex items-center">
            <ThumbsUpIcon className="h-16 w-16 mr-4" />
            <div>
              <h3 className="text-4xl font-bold">9/10</h3>
              <p>Customer Satisfaction Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section3;
