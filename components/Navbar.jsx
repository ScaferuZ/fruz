import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center my-4">
      <Link href="/">
        <h1 className="text-7xl font-Playfair font-bold cursor-pointer">
          FRUZ
        </h1>
      </Link>
    </nav>
  );
};

export default Navbar;
