import { Menu } from "./menu";
import Link from "next/link";

export function Intro() {
  return (
    <section className="flex items-start justify-between mt-6 mb-6">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight text-h1 text-center md:text-left">
          <Link
            href="/"
            className="transition-colors duration-150 hover:text-h1-hover"
          >
            Phish and Chips
          </Link>
        </h1>
        <h4 className="text-center md:text-left text-md mt-2">
          Approachable snack sized bytes of cybersecurity information
        </h4>
      </div>
      <Menu />
    </section>
  );
}
