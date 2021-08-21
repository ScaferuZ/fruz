import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="font-Lato">
      <header className="mb-12 md:mb-48">
        <Navbar />
      </header>
      {children}
      <footer className="flex fixed justify-center items-center left-0 bottom-0 w-full h-14 bg-primary">
        <p className="text-sm md:text-lg text-white">
          Made by{" "}
          <a target="_blank" href="https://nextjs.org/">
            Next.js
          </a>
          ,{" "}
          <a target="_blank" href="https://www.contentful.com/">
            Contentful
          </a>
          , and deployed on <a href="vercel.com">Vercel</a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
