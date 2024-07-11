import Image from "next/image";
import Description from "./components/Description";
import Contacts from "./components/Contacts";
import MenuItem from "./components/MenuItem";

export default function Home() {
  return (
    <div className="container flex flex-col gap-3 justify-between items-center relative">
      <div className="mt-12">
        <Image
          className="rounded-full mx-auto mt-16 mb-5"
          src="/img-of-me.jpeg"
          alt="Logo"
          width={200}
          height={200}
        />
        <Description />
        <Contacts />
        <MenuItem />
      </div>
    </div>
  );
}
