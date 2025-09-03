import Image from "next/image";

export function Header() {
  return (
    <header className="flex items-center p-6 justify-center gap-12 dark:bg-gray-800 dark:text-white">
      <h1 className="font-bold text-2xl">Orders App</h1>
    </header>
  )
}