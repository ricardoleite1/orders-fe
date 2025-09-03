import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <Link href={"/"}>
      <header className="flex items-center p-6 justify-center gap-12 dark:bg-gray-800 dark:text-white">
        <h1 className="font-bold text-2xl">Orders App</h1>
      </header>
    </Link>
  )
}