import { Menu } from "./menu";
import Link from "next/link";

export function Intro() {
  return (
    <div className="mx-auto px-4 mr-12">
      <section className="flex items-center mt-10 mb-10">
        <div className="flex-1">
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
        <div className="flex items-center">
          <Menu />
        </div>
      </section>
    </div>
  );
}
