import Link from "next/link";

export default function MenuItem() {
  return (
    <div className="mb-32">
      <ul className="flex gap-4">
        <li className="bg-cyan-300 py-1 px-4 rounded-md hover:bg-cyan-500 hover:text-gray-100">
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li className="bg-cyan-300 py-1 px-4 rounded-md hover:bg-cyan-500 hover:text-gray-100">
          <Link href={"/showcase"}>Showcase</Link>
        </li>
      </ul>
    </div>
  );
}
