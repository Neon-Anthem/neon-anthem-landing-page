import logoLight from "@/public/assets/neon-anthem/neon-anthem-logo-light.svg";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-center">
      <Brand />
    </nav>
  );
}

function Brand() {
  return (
    <div>
      <Image
        src={logoLight}
        width={100}
        height={100}
        className="size-10"
        alt="Neon anthem logo, Capital N with a Polestar on the top right of the capital N"
      />
    </div>
  );
}
