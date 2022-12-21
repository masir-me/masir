import { IconBrandGithub, IconBrandTelegram } from "@tabler/icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      className="flex items-center justify-between w-full max-w-4xl mx-auto p-4
    "
    >
      <Link passHref href="/">
        <a className="text-lg font-thin">مسیر</a>
      </Link>
      <div className="flex items-center space-x-2 space-x-reverse">
        <Link passHref href="https://github.com/kasraghoreyshi/masir">
          <a className="rounded-full border border-white text-white px-2 py-2 text-sm lg:text-base">
            <IconBrandGithub />
          </a>
        </Link>
        <Link passHref href={"https://t.me/my_masir"}>
          <a className="px-2 py-2 rounded-full border text-sm lg:text-base border-blue-500 text-blue-500">
            <IconBrandTelegram />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
