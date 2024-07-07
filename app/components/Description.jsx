import Image from "next/image";

export default function Description() {
  return (
    <div>
      <ul className="flex gap-4 text-sm mt-4">
        <li>
          Aquarians
          <Image
            className="inline-block ml-4"
            src={"/aquarius.svg"}
            width={8}
            height={8}
          />
        </li>
        <li>
          INFP
          <Image
            className="inline-block ml-4"
            src={"/aquarius.svg"}
            width={8}
            height={8}
          />
        </li>
        <li>
          Movie enthusiast
          <Image
            className="inline-block ml-4"
            src={"/aquarius.svg"}
            width={8}
            height={8}
          />
        </li>
        <li>Music listener</li>
      </ul>
    </div>
  );
}
