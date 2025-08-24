import Link from "next/link";

export function Menu() {
  return (
    <nav>
      <ul className="flex space-x-6">
        <li>
          <Link href="/mission" className="text-lg font-medium hover:underline">
            Mission
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-lg font-medium hover:underline">
            About Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}