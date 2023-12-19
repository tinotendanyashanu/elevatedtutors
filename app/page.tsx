// app/page.tsx
import { Button } from "@nextui-org/button";
import { ThemeSwitch } from "../components/ThemeSwitcher";
import Sample from "../components/sample";
import { Navbar } from "@/components/navbar";
import Hero from "@/components/sections/hero";
import BackBg from "@/components/bg";
import Section2 from "@/components/sections/section2";
import Section3 from "@/components/sections/Section3";
import Section4 from "@/components/sections/section4";
import Section5 from "@/components/sections/section5";
import Section6 from "@/components/sections/section6";
import Section7 from "@/components/sections/section7";

export default function Page() {
  return (
    <div className="mx-auto">
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      {/* <div className="flex flex-wrap gap-4 items-center">
        <BackBg />
      </div> */}
    </div>
  );
}
