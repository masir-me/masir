import { IconBrandGithub, IconBrandTelegram } from "@tabler/icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      className="flex items-center justify-between w-full max-w-4xl mx-auto p-4
    "
    >
      <Link className="text-lg font-thin" href="/">
        مسیر
      </Link>
      <div className="flex items-center space-x-2 space-x-reverse">
        <Link
          href="https://github.com/kasraghoreyshi/maseer"
          className="rounded-full border border-white text-white px-4 py-2 text-sm lg:text-base flex items-center space-x-2 space-x-reverse"
        >
          <p>گیت هاب</p>
          <IconBrandGithub />
        </Link>
        <Link
          className="px-4 py-2 rounded-full border text-sm lg:text-base border-blue-500 text-blue-500 flex items-center space-x-2 space-x-reverse"
          href={"https://t.me/my_maseer"}
        >
          <p>تلگرام</p>
          <IconBrandTelegram />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
