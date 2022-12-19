import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-lg font-thin">مسیر</h1>
      <div className="flex items-center space-x-2 space-x-reverse">
        <Link
          href="https://github.com/kasraghoreyshi/maseer"
          className="rounded-full bg-gradient-to-tr from-green-600 to-pink-600 px-4 py-2 text-sm lg:text-base"
        >
          مشاهده در GitHub
        </Link>
        <Link
          className="px-4 py-2 rounded-full border text-sm lg:text-base"
          href={"https://t.me/my_maseer"}
        >
          کانال تلگرام
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
