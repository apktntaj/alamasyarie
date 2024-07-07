import Link from "next/link";
import { MdMarkEmailUnread, MdOutlineWhatsapp } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contacts() {
  return (
    <div>
      <ul className="flex gap-4">
        <li>
          <Link href={"mailto:maiaelarsya@gmail.com"}>
            <MdMarkEmailUnread size={25} />
          </Link>
        </li>
        <li>
          <Link href={"https://wa.me/6201510093866"}>
            <MdOutlineWhatsapp size={25} />
          </Link>
        </li>
        <li>
          <Link href={"https://github.com/apktntaj"}>
            <FaGithub size={25} />
          </Link>
        </li>
        <li>
          <Link href={"https://www.linkedin.com/in/alam-asy-arie-a42852275/"}>
            <FaLinkedin size={25} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
