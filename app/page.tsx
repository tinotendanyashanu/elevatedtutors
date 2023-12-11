// app/page.tsx
import { Button } from "@nextui-org/button";
import { ThemeSwitch } from "../components/ThemeSwitcher";
import Sample from "../components/sample";
import { Navbar } from "@/components/navbar";
import Hero from "@/components/sections/hero";
import BackBg from "@/components/bg";

export default function Page() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 items-center">
      <BackBg />
        <Hero />
      </div>
    </div>
  );
}
