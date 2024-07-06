import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image src={"/aquarius.svg"} width={30} height={30} />
      <span></span>
    </div>
  );
}
