import Link from "next/link";

type ButtonProps = {
  href?: number | string;
  text: string;
  className?: string;
}

export function Button({ className, href, text }: ButtonProps) {
  return (
    <Link className={className} href={`/restaurant/${href}`}>
      <button className="border-none font-bold bg-blue-500 text-white py-2 px-4 rounded cursor-pointer 
      hover:bg-blue-600 delay-50 transition-colors">{text}</button>
    </Link>
  )
}