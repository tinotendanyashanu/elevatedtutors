// components/Hero.tsx

import React from "react";
import { Badge, Button, Image } from "@nextui-org/react";
import Link from "next/link";
import BackBg from "../bg";

const Hero: React.FC = () => {
  return (
    <div className="">
      <section className="relative pt-16 pb-32">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold leading-tight text-gray-800">
                Education Is A Path To Success In Life
              </h1>
              <p className="mt-4 text-gray-600">
                Sed ut voluptatem aperiam unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium.
              </p>
              <Button className="mt-6 bg-[#ff9900] text-white">
                Get Started Today
              </Button>
            </div>
            <div className="relative">
              <img
                alt="Hero Image"
                className="rounded-full border-8 border-white"
                height="400"
                src="/hero.png"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width="400"
              />
              <Badge
                className="absolute -top-4 -right-4 bg-[#ff9900] text-white"
                variant="solid"
              >
                28K
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
