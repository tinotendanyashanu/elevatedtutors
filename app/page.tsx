// app/page.tsx
import { Button } from "@nextui-org/button";
import { ThemeSwitch } from "../components/ThemeSwitcher";
import Sample from "../components/sample";
import { Navbar } from "@/components/navbar";

export default function Page() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 items-center">
        <Button color="primary" variant="solid">
          Solid
        </Button>
        <Button color="primary" variant="faded">
          Faded
        </Button>
        <Button color="primary" variant="bordered">
          Bordered
        </Button>
        <Button color="primary" variant="light">
          Light
        </Button>
        <Button color="primary" variant="flat">
          Flat
        </Button>
        <Button color="primary" variant="ghost">
          Ghost
        </Button>
        <Button color="primary" variant="shadow">
          Shadow
        </Button>
      </div>
    </div>
  );
}
