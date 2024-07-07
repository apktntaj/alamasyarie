import Image from "next/image";
import Description from "./components/Description";
import Contacts from "./components/Contacts";
import MenuItem from "./components/MenuItem";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <Image
        className="rounded-full mx-auto mt-16"
        src="/img-of-me.jpeg"
        alt="Logo"
        width={200}
        height={200}
      />
      <Description />
      <Contacts />
      <MenuItem />
    </div>
  );
}
